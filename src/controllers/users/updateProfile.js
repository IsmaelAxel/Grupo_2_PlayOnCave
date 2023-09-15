const { readJSON, writeJSON } = require("../../data");
const { unlinkSync, existsSync } = require("fs").promises; // Importa fs.promises para usar promesas.

module.exports = async (req, res) => {
    try {
        const { firstName, lastName, birthday, address, city, province } = req.body;
        const users = await readJSON('users.json'); // Usa await para leer el archivo JSON.

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
                    if (existsSync(imagePath)) {
                        unlinkSync(imagePath);
                    }
                    user.avatar = req.file.filename;
                }
            }
            return user;
        });

        await writeJSON(usersModify, 'users.json'); // Usa await para escribir el archivo JSON.
        res.redirect('/');
    } catch (error) {
        console.error('Error al leer, escribir o procesar los datos:', error);
        // Maneja el error de acuerdo a tus requerimientos.
        res.status(500).send('Error interno del servidor');
    }
}
