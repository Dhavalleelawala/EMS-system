import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : { type : String }, 
    email : { type : String }, 
    password : { type : String }, 
    role : { type : String, enum : ["user","manager","admin"], default : "user" } 
})

const User = mongoose.model('user',userSchema);

export default User;