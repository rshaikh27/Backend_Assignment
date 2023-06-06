const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const Router = require("./src/route")
dotenv.config()

const app = express()
app.use(express.json())

app.use("/",Router)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})
mongoose.connect(process.env.DB_URI)
.then(()=>console.log("Conected to DB"))
.catch((err)=>console.log(err))