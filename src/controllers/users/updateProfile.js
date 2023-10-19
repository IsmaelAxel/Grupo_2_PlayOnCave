const db= require('../../database/models')
const { existsSync, unlinkSync } = require('fs')
const { validationResult } = require("express-validator");

module.exports = async (req, res) => {
    try {
        
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const {name,surname,birthday,address, city, province} =req.body

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
                }).then(response=>{
                    console.log(response);
                    req.session.userLogin.name = name;
                    res.locals.userLogin.name= name;
                
                    return res.redirect('/')
                })

                    if (req.file) {
                        // Verifica si existe la imagen y elimínala si es necesario.
                        const imagePath = `./public/images/users/${user.avatar}`;
                        try {
                            const stats = fs.promises.stat(imagePath);
                            if (stats.isFile()) {
                                fs.promises.unlink(imagePath);
                            }
                        } catch (err) {
                            console.error('Error al verificar o eliminar el archivo:', err);
                        }

                        user.avatar = req.file.filename;
                    }
                
                return user;

        } else {
            (req.file && existsSync(`./public/images/users/${req.file.filename}`) && unlinkSync(`./public/images/users/${req.file.filename}`))
            db.Users.findByPk(req.session.userLogin.id)
           .then(user => {
            return res.render('profile',{
                title:'profile',
            ...user.dataValues,
            errors : errors.mapped()
    })
    
    }).catch(errors => console.log(errors))
        }
    } catch (error) {
        console.error('Error al leer, escribir o procesar los datos:', error);
        // Maneja el error de acuerdo a tus requerimientos.
        res.status(500).send('Error interno del servidor');
    }
}
