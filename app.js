const express = require('express')
const mongoose = require('mongoose');
const app = express()
const route = require('./routes/message')

mongoose.connect('mongodb+srv://root:root@cluster0.oxo7s.mongodb.net/projectLundi?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log("db valid"))
.catch(() => console.log("db error"))

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-type,Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/message', route)

module.exports = app