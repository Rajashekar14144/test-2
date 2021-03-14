// import express from 'express'

const express = require('express')
const app = express()

const Port = 3000

app.get('/',function (res,req){

    res.send("Hello World !!!")

})

app.listen(Port,()=>{
    
    console.log(`Example app listening at http://localhost:${Port}`)
})