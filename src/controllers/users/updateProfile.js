const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {

        const { name, surname,birthday} = req.body;

        console.log(req.body.name);

        db.Users.update(
            {
                name: name.trim(),
                surname: surname.trim(),
                birthday
            },
            {
                where: {
                    id: req.session.userLogin.id
                }
            }
        ).then(response => {
            
            console.log( response);
            
            req.session.userLogin.name = name;
                res.locals.userLogin.name = name
            
            if (req.cookies.PlayOnCave) {
                res.cookie('PlayOnCave', req.session.userLogin);
            }
            return res.redirect('/');
        }).catch(error => {
            console.error('Error al actualizar el usuario:', error);
            return res.status(500).send('Error al actualizar el usuario');
        });

    } else {
        db.Users.findByPk(req.session.userLogin.id)
            .then(user => {
                console.log('Usuario encontrado en la base de datos:', user);

                return res.render('profile', {
                    ...user.dataValues,
                    errors: errors.mapped()
                });
            })
            .catch(error => {
                console.error('Error al buscar el usuario en la base de datos:', error);
                return res.status(500).send('Error al buscar el usuario en la base de datos');
            });
    }
};
