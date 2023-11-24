const { validationResult } = require('express-validator');
const db = require('../../database/models');
const {existsSync,unlinkSync} = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, surname, birthday,address, city, province } = req.body;
        const avatar = req.file ? req.file.filename : req.session.userLogin.avatar;

        db.Users.findByPk(req.session.userLogin.id)
            .then(user => {
                const oldAvatar = user.avatar;
     
                db.Users.update(
                    {
                        name: name.trim(),
                        surname: surname.trim(),
                        birthday,
                        avatar
                    },
                    {
                        where: {
                            id: req.session.userLogin.id
                        }
                    }
                ).then( async () => {
                    
                    req.session.userLogin.name = name;
                    req.session.userLogin.avatar = avatar;

                    if (req.cookies.PlayOnCave) {
                        res.cookie('PlayOnCave', req.session.userLogin);
                    }
                    await db.Addresses.update(
                        {
                            address: address.trim(),
                            city,
                            province,
                        },
                        {
                            where : {
                                userId : req.session.userLogin.id
                            }
                        }
                    )

                    if (req.file && oldAvatar) {
                        existsSync(`./public/images/users/${user.avatar}`) &&
                        unlinkSync(`./public/images/users/${user.avatar}`);
                    }
                    return res.redirect('/');
                }).catch(error => {
                    console.error('Error al actualizar el usuario:', error);
                    return res.status(500).send('Error al actualizar el usuario');
                });
            })
            .catch(error => {
                console.error('Error al buscar el usuario en la base de datos:', error);
                return res.status(500).send('Error al buscar el usuario en la base de datos');
            });
    } else {
        if (req.file) {
            const filePath = path.join('./public/images/users', req.file.filename);
            existsSync(filePath) && unlinkSync(filePath);
        }
       
        db.Users.findByPk(req.session.userLogin.id, {
            include: ['address']
        })
            .then(user => {
                const birthday = new Date(user.birthday).toISOString();
                console.log(birthday.split('T')[0]);
                return res.render('profile', {
                    ...user.dataValues,
                    birthday: birthday.split('T')[0],
                    errors : errors.mapped()
                })
            })
            .catch(error => {
                console.error('Error al buscar el usuario en la base de datos:', error);
                return res.status(500).send('Error al buscar el usuario en la base de datos');
            });
    }
};
