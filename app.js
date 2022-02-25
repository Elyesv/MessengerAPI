const express = require('express')
const mongoose = require('mongoose');
const app = express()
const routeMessage = require('./routes/message')
const routeUser = require('./routes/user')
const cors = require('cors')

mongoose.connect('mongodb+srv://root:root@cluster0.oxo7s.mongodb.net/projectLundi?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log("db valid"))
.catch(() => console.log("db error"))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/message', routeMessage)
app.use('/user', routeUser)

module.exports = app