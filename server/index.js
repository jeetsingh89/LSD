const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    methods:["POST", "GET"],
    credentials:true,            //access-control-allow-credentials:true
    
 }
const {registerUser, loginUser, getUser, getSocialMedia, editProfile, editSocials, loadLinks, editLinks, addLinks} = require('./controllers/auth')
const {dashBoardUser}= require("./controllers/dashBoard")
const {LinkTreeUser, linkTreeUser} = require('./controllers/linkTree')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express()
app.use(cors(corsOptions));
app.options('*', cors())
app.use(bodyParser.json({limit:'500mb'}))
app.use(bodyParser.urlencoded({limit:"500mb", parameterLimit:1000000, extended: true}))

//app.use(express.json({limit:"500mb"}))
dotenv.config(); 

mongoose.set('strictQuery', false)





mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('DB connection successfull')
}).catch((err)=>{
    console.log({err:"Cant connect to DB"})
})

const port = process.env.PORT || 8080



app.get('/cors', (req, res) => {
res.set('Access-Control-Allow-Origin', '*');
res.send({ "msg": "This has CORS enabled 🎈" })
})
app.get('/', (req, res)=>{
    res.send(`Server is running at ${port}`)
})

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.post('/data/dashboard', dashBoardUser)
app.get('/get/:handle', getUser)
app.get('/get/socials/:handle', getSocialMedia)
app.post('/save/editprofile', editProfile)
app.post('/save/editsocials', editSocials)
app.post('/save/links', loadLinks)
app.post('/save/editlinks', editLinks)
app.post('/save/addlinks', addLinks)

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})
