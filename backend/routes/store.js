const express = require('express')

const app = express()

const store = app.post('/store',(req,res,next)=>{
    res.send("<h1>Product Added</h1>")
    console.log("store page")
})

module.exports=store;