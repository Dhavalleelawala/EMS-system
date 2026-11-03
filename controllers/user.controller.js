import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async(req,res)=>{
    try {
        const {username, email, password, confirmPassword} = req.body;

        if(!username || !email || !password) return res.json({message : "All field are required."});

        const userExist = await User.findOne({ email });

        if(userExist) return res.json({message : "User exits."});

        if(password != confirmPassword) return res.json({message : "Password and Confirm Password Not Match."})

        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password,salt);

        const data = await User.insertOne(req.body);

        return res.json({message : "User Register successfully", user : data});

    } catch (error) {
        console.log(error.message);
    }
}