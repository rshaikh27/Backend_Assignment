const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express= require('express');
const cookieParser = require('cookie-parser');



const app=express();
app.use(cookieParser());
dotenv.config({path:"./config.env"})

require("./conn");

app.use(express.json());

app.use(require("./router/auth"));

 const PORT = process.env.PORT;
 
//const doctor=require('./model/doctorSchema')



 
 
 app.listen(PORT,()=>
 {
   console.log("SERVER IS RUNNING");
 })