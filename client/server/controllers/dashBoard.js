const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {jwt_decode} = require('jwt-decode')
//import * as jwtdecode from 'jwt-decode'
//const decode = jwt_decode();

const dashBoardUser =  async(req, res)=>{
    const {tokenMail} = req.body
    console.log(tokenMail)
    //const decode = jwt.decode(tokenMail, process.env.SECRET_JWT)
    //console.log(decode);
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
            links: user.links.length
         }
         console.log(user)
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
module.exports = {dashBoardUser}