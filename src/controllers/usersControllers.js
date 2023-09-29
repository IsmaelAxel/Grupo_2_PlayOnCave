module.exports = {
    login:require('./users/login') ,
    processLogin:require('./users/processLogin'),
    register: require('./users/register'),
    processRegister: require('./users/processRegister'),
    admin :require('./users/admin') ,
    users: require('./users/users'),
    profile: require("./users/profile"),
    updateProfile: require("./users/updateProfile"),
    logout:require('./users/logout')
 }