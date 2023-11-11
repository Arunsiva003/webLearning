const express = require('express')

const app = express()

const admin = app.get("/",(req,res,next)=>{
    console.log("Express")
    res.send("<form action='/store' name='product' method='POST'><input typee='text' name='pro' required /><input type='submit' value='submit'/></form>")
})

module.exports=admin;