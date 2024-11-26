import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();

const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000!!");
})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongo db connected");
}).catch((err)=>{
    console.log(err);
});