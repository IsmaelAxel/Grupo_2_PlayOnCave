const db = require("../../database/models");
module.exports = {
  loginGoogle: async (req, res) => {
    const {
      provider,
      _json: { sub:googleId, given_name: name, family_name: surname, picture,email },
    } = req.session.passport.user;

    try {
   
    const [{id,rolId},isCreate] = await db.Users.findOrCreate(
    { where:
         { socialId:googleId},      
    defaults:{
    name,
    surname, 
    avatar:picture,
    socialId:googleId,
    socialProvider:provider,
    email,

   
}
})
const address = await db.Addresses.create({userId:id})
if (!isCreate){
    await address.destroy()
} 
    req.session.userLogin={
        id,
        name,
        role:rolId,
        socialId:googleId,
        
    }
    res.redirect('/users/profile')
    } catch (error) {
        console.log(error);
        
    }  
  },
};
