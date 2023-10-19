const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const db = require("../../database/models");

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, surname, email, password } = req.body;
        db.Users.create({
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            password: hashSync(password, 10),
            avatar: req.file ? req.file.filename : null,
            roleId: 2,

        })
            .then((user) => {
                db.Addresses.create({
                    userId: user.id,
                }).then(() => {

                    return res.redirect("/");
                });
            })
            .catch((error) => console.log(error));
    } else {
        (req.file && existsSync(`./public/images/users/${req.file.filename}`) && unlinkSync(`./public/images/users/${req.file.filename}`))

        return res.render("register", {
            old: req.body,
            errors: errors.mapped(),
        });
    }
};