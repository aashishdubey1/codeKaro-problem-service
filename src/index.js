
const express = require('express')

const {PORT}  = require('./config/server-config')


app.use(express.json())
app.use(express.urlencoded({extended:true}))



const app = express();


app.listen(PORT,()=>{
    console.log('Server is Running on Port,',PORT)
})
