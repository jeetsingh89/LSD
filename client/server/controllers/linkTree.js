const User = require('../models/user')
const jwt = require('jsonwebtoken')

const linkTreeUser = async(req, res)=>{
    const {tokenMail} = req.body
    console.log(tokenMail)
    try {
            const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
            console.log(decodedTokenMail)
        
        const email = decodedTokenMail.email
    
        console.log(email,'email')
        //const user = await User.findOne({email:email})
        await User.findOne({email:email}).then((user)=>{
            const userData = {
            name: user.name,
            bio: user.bio,
            handle: user.handle,
            avatar:user.avatar,
            links: user.links
         }
         console.log(user, "Found")
      return res.json({
        message:"Success from Back", userData, status:"success"
    }) 
        }).catch((error=>{
            return res.json(error);
        }))

        //const userData = {
           // name: user.name,
          //  handle: user.handle,
           // avatar:user.avatar,
          //  links: user.links.length
    //    }
        //return res.json({
           // message:"Success from Back", userData, status:"success"
      //  }) 
    } catch (error) {
        return res.json({status:"error", error: error.message})
    }
}
module.exports = {linkTreeUser}