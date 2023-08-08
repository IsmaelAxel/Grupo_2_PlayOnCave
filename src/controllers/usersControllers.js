module.exports = {
    login: (req, res) => {
        return res.render('login');
    },
    register: (req, res) => {
        return res.render('register');
    },
    admin: (req, res) => {
        return res.render('admin');
    }

}