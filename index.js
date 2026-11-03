import express from "express";
import 'dotenv/config'
import db from "./configs/db.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/api/employee',userRouter);

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);        
    }else{
        console.log("Server start");
        console.log(`http://localhost:${PORT}`);        
    }
})
