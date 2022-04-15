const mongoose=require('mongoose');

const user=mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:30
    },

    email:{
        type:String,
        required:true,
        min:6,
        max:30
    },

    password:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('User',user);