const mongoose = require('mongoose');
const {model, Schema} = mongoose

const User = new Schema({
    name:{type : String, default:"Name"},
    bio:{type : String, default:"Bio"},
    email:{type : String, required: true,unique:true},
    avatar:{type : String, default:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"}, 
    password:{type : String, required:true},
    handle:{type : String, required: true, unique: true},
    links:[{
        url:{type : String},
        title:{type : String},
        icon:{type : String}
    }],
    socialMedia:{
        facebook:{type : String},
        x:{type : String},
        instagram:{type : String},
        youtube:{type : String},
        linkedin:{type : String},
        github:{type : String},
    },
    donation:{
        paypal:{type : String},
        venmo:{type : String},
        patreon:{type : String}
    }

}, {collection: 'user-data'})

const userModel = model('userData', User)

module.exports = userModel