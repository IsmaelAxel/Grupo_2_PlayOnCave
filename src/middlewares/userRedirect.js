module.exports = (req,res,next) => {
    if(req.session.userLogin){
    return res.redirect('/users/profile') 
    }else {
        next()
    }
}