const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app=new express();
app.use(express.json())
app.use(cors());

const prodSchema = new mongoose.Schema({
      "title":{type:String}
})
const prods = mongoose.model("prods",prodSchema)

mongoose.connect('mongodb://localhost:27017/ecomProds').then(()=>{
    console.log("connection established")
}).catch(err=>{
    console.log(err)})

app.listen(8002,()=>{
    console.log("imlistening")
})
app.post('/',(req,res)=>{
    console.log(req.data)
})


