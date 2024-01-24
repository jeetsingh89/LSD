const User = require('../models/user')
const jwt = require('jsonwebtoken')


const registerUser = async(req, res)=>{
    const {handle, email, password } = req.body;
    console.log(req.body)
   
    try{
    const defaultLink = {url:'www.google.com', title:'Google', icon:''}
    const user = await User.create({handle, email, password, links:[defaultLink]})
    const token = jwt.sign({email:email}, process.env.SECRET_JWT, )
    return res.json({message: "User Registered", status :"success", "token":token, id: user._id})
    } catch(error){
        if(error.code === 11000){
            return res.json({message: "Try different social handle or email", status :"error"})   
        }
        return res.json({message: error.message, status :"error"})   
    }
}

const loginUser = (req, res)=>{
    //res.send('Login path')
    const {email, password } = req.body;
    /*try {
        const user = User.findOne({ email, password});
        console.log(user._id)
        if(!user){
            return res.json({status:"Login-error", error:'Wrong email or password'})
        }
        const token = jwt.sign({email:email}, process.env.SECRET_JWT)
        return res.json({message:'User found', status:'success', "token":token, id: user._id})
    } catch (error) {
        return res.json({message:error.message, status:"error"})
    }*/
    User.findOne({email}).then((user)=>{
        if(user.password===password){
            const token = jwt.sign({email:email}, process.env.SECRET_JWT)
            return res.json({message:'User found', status:'success', "token":token, id: user._id})
        }
        else{
            return res.json({status:"Login-error", error:'Wrong email or password'})
        }
    }).catch((error)=>{
        return res.json({message:error.message, status:"error"})
    })
}

const getUser = (req, res)=>{

}

module.exports = {registerUser, loginUser, getUser}