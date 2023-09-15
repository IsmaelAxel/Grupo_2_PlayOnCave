module.exports = (req, res, next) => {
    if (req.cookies.PlayOnCave) {
        req.session.userLogin = req.cookies.PlayOnCave
    }
    next()
}