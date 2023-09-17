const { readJSON, writeJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs')
const { validationResult } = require("express-validator");

module.exports = async (req, res) => {
    try {
        const { firstName, lastName, birthday, address, city, province } = req.body;
        const users = await readJSON('users.json'); // Usa await para leer el archivo JSON.
        const errors = validationResult(req);
        const user = users.find(user => user.id === req.session.userLogin.id);

        if (errors.isEmpty()) {
            const usersModify = users.map(user => {
                if (user.id === req.params.id) {
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.birthday = birthday;
                    user.address = address;
                    user.city = city;
                    user.province = province;

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
                }
                return user;
            });

            await writeJSON(usersModify, 'users.json');
            res.redirect('/');
        } else {
            (req.file && existsSync(`./public/images/users/${req.file.filename}`) && unlinkSync(`./public/images/users/${req.file.filename}`))
            return res.render('profile', {
                title: 'profile',
                errors: errors.mapped(),
                old: req.body,
                ...user
            });
        }
    } catch (error) {
        console.error('Error al leer, escribir o procesar los datos:', error);
        // Maneja el error de acuerdo a tus requerimientos.
        res.status(500).send('Error interno del servidor');
    }
}
