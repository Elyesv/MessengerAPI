const Post = require('../models/post')
const express = require('express')
const router = express.Router()

exports.getAllPost = (req, res) => {
    console.log('get all post')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}))
}

// router.post('/test', (req, res) => {
//     console.log('get all post')
//     Post.find()
//         .then(posts => res.status(200).json(posts))
//         .catch(error=> res.status(400).json({error}))
// })

exports.createPost = (req,res)=>{
    console.log("post test")
    console.log('MESSAGE WAS SEND')
    const postObject = JSON.parse(JSON.stringify(req.body))
    delete postObject._id
    const p = new Post({
        ...postObject
    })
    p.save()
        .then(() => res.status(201).json({message : 'ok'}))
        .catch(error=> res.status(400).json({error}))
}

// router.get('/test', (req, res) => {
//     console.log("post test")
//     console.log('MESSAGE WAS SEND')
//     const postObject = JSON.parse(JSON.stringify(req.body))
//     delete postObject._id
//     const p = new Post({
//         ...postObject
//     })
//     p.save()
//         .then(() => res.status(201).json({message : 'ok'}))
//         .catch(error=> res.status(400).json({error}))
// })