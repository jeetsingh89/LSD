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
    User.findOne({email:email}).then((user)=>{
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

const getUser = async(req, res)=>{

    const handle = req.params.handle;
    console.log(handle)
    try{

    
     await User.findOne({handle : handle}).then((data)=>{
        console.log(data ,'GET REQUEST DATA')
        //data.links?.map((link, i)=>{
          //  link.url = "www.Google.com"
           // link.title = "Google"
           // link.icon = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
       // })
        const user ={
            name: data.name,
            bio: data.bio,
            handle:data.handle,
            avatar: data.avatar,
            links: data.links
        }
        console.log(data.socialMedia)
        return res.json({message:"User Found..", user, status:"success"})
     }).catch((error)=>{
        return res.json(error);
     })    
}catch(error){
    return res.json({message:error.message, status:"error"})
}
}

const getSocialMedia = async(req, res)=>{
    const handle = req.params.handle;
    console.log(handle)
    try{

    
     await User.findOne({handle : handle}).then((data)=>{
        console.log(data ,'GET REQUEST DATA2')
        const socialMedia = data.socialMedia
        const user ={
            name: data.name,
            bio: data.bio,
            handle:data.handle,
            avatar: data.avatar,
            links: data.links
        }
        console.log(socialMedia)
        return res.json({message:"Socials Found..", socialMedia, user, status:"success"})
     }).catch((error)=>{
        return res.json(error);
     })    
}catch(error){
    return res.json({message:error.message, status:"error"})
}  
}


const editProfile = async(req, res)=>{
    const {tokenMail} = req.body;
    const {avatar} = req.body;
    const {name} = req.body;
    const {bio} = req.body;
    console.log(tokenMail,' token mail of put')
    try {
        const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email
        console.log(email,'email of PUT')
        await User.updateOne({email: email}, req.body).then((user)=>{
           // user.avatar = avatar
           // user.name = name
           // user.bio = bio
            console.log(user);
            return res.json({message:"Profile Updated...", status:"success", id: user._id})
        }).catch((error)=>{
            return res.json(error);
        })

    } catch(error){
        return res.json({message:error.message, status:"error"})
    }
}

const editSocials =async(req, res)=>{
    const {tokenMail} = req.body;
    try{
        const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email 
        console.log(email,'email of PUT/Socials')
        await User.updateOne({email: email}, req.body).then((user)=>{
             console.log(user);
             return res.json({message:"Socials Updated...", status:"success", id: user._id})
         }).catch((error)=>{
             return res.json(error);
         })

    } catch(error){
        return res.json({message:error.message, status:"error"})
    }
}



const loadLinks = async(req, res)=>{
    const {tokenMail} = req.body;
    try {
        const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email 
       console.log('load links', email)

        await User.findOne({email:email}).then((data)=>{
           //console.log('Hogya bhaiya')
           links = data.links;
           return res.json({message:"Links Loaded...", links, status:"success"})

        }).catch((error)=>{
                return res.json(error);    
        })

    } catch (error) {
        return res.json({message:error.message, status:"error"})
    }
}



const editLinks = async(req, res)=>{
    const {tokenMail} = req.body;
    const {links} = req.body;
   // console.log(link)
    try{
        const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email 
        console.log(email,'email of PUT/Socials')

         await User.findOne({email:email}).then((data)=>{
           const newLinks = links.map((link)=>({
            url: link.link.url,
            title:link.link.title,
            icon:''
           }))
           data.links = newLinks
            data.save();
           return res.json({message:"Links Updated...", status:"success"})

         }).catch((error)=>{return res.json(error)})

    } catch(error){
        return res.json({message:error.message, status:"error"})
    }
}

const addLinks = async(req, res)=>{
    const {tokenMail} = req.body;
    const {link} = req.body;
    console.log(link)

    try {
        const decodedTokenMail = jwt.decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email 
        await User.findOne({email:email}).then((data)=>{
            const links = data.links;
            links.push(link)
            data.save();
           console.log(links)
           return res.json({message:"Link Added...", status:"success"})
        }).catch((error)=>{return res.json(error)})
        


    } catch (error) {
        return res.json({message:error.message, status:"error"})
    }


}


module.exports = {registerUser, loginUser, getUser, getSocialMedia, editProfile, editSocials,loadLinks,editLinks, addLinks}