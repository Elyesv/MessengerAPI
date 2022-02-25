const Post = require('../models/message')
const express = require('express')
const router = express.Router()

exports.getAllPost = (req, res) => {
    console.log('get all post')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}))
}

exports.createPost = (req,res)=>{
    console.log("post test")
    console.log('MESSAGE WAS SEND')
    const postObject = JSON.parse(JSON.stringify(req.body))
    delete postObject.userId
    const p = new Post({
        ...postObject
    })
    p.save()
        .then(() => res.status(201).json({message : 'ok'}))
        .catch(error=> res.status(400).json({error}))
}

exports.getPostAutor = (req, res) => {
    console.log(req.params.autor)
    Post.find({autor:(req.params.autor).charAt(0).toUpperCase() + (req.params.autor).slice(1)})
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}


exports.modifyPost = (req, res, next) =>{
    console.log('Modifying post')
    Post.updateOne(
        {_id: req.body.msgId},
        {message: req.body.message}
    )
        .then(post => res.status(200).json({message : "Post modified"}))
        .catch(error =>res.status(400).json({error}))
}

exports.deletePostId = (req, res) => {
    console.log('Delete post')
    Post.deleteOne({_id: req.body.msgId})
        .then(post => res.status(200).json({message : "Post delete"}))
        .catch(error =>res.status(400).json({error}))
}
