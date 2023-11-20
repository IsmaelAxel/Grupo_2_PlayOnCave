const db = require('../../database/models')

module.exports = (req, res) => {

    db.Users.findByPk(req.session.userLogin.id, {
        include: ['address']
    })
        .then(user => {
            const birthday = new Date(user.birthday).toISOString();
            console.log(birthday.split('T')[0]);
            return res.render('profile', {
                ...user.dataValues,
                birthday: birthday.split('T')[0]
            })
        })
        .catch(error => console.log(error))

}