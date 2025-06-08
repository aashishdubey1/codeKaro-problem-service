
const express = require('express')
const app = express();
const {PORT}  = require('./config/server-config')
const apiRouter = require('./routing');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db-config');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRouter)


app.get('/ping',(req,res)=>{
    res.send("Pong") 
})


app.use(errorHandler)


app.listen(PORT,async ()=>{
    console.log('Server is Running on Port,',PORT)
    await connectToDB()
    console.log("Successfully connected to the db ")
})
