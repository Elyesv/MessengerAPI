const express = require('express')
const mongoose = require('mongoose');
const app = express()
//const Post = require('./models/post')
const route = require('./routes/test')

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

app.use(route)

// app.get('/test',(req,res)=>{
//     console.log('get all post')
//     Post.find()
//         .then(posts => res.status(200).json(posts))
//         .catch(error=> res.status(400).json({error}))
// })

// app.post('/test',(req,res)=>{
//     console.log("post test")
//     res.send('MESSAGE WAS SEND')
//     const postObject = JSON.parse(JSON.stringify(req.body))
//     delete postObject._id
//     const p = new Post({
//         ...postObject
//     })
//     p.save()
//         .then(() => res.status(201).json({message : 'ok'}))
//         .catch(error=> res.status(400).json({error}))
// })

module.exports = app