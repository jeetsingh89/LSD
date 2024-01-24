const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const {registerUser, loginUser, getUser} = require('./controllers/auth')
const {dashBoardUser}= require("./controllers/dashBoard")
const {LinkTreeUser, linkTreeUser} = require('./controllers/linkTree')
const dotenv = require('dotenv')
dotenv.config(); 

mongoose.set('strictQuery', false)


const app = express()
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Linktree").then(()=>{
    console.log('DB connection successfull')
}).catch((err)=>{
    console.log({err:"Cant connect to DB"})
})

const port = 8080
app.use(cors());
app.get('/', (req, res)=>{
    res.send(`Server is running at ${port}`)
})

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.post('/data/dashboard', dashBoardUser)
app.post('/data/handle', linkTreeUser )
app.get('/:handle', getUser)
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})