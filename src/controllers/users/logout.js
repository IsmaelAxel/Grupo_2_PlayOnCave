module.exports = (req,res) => {
    req.session.destroy();
    res.cookie("PlayOnCave", null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}