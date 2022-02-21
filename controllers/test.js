const Post = require('../models/post')


exports.getAllPost = (req,res,next)=>{
    console.log('get all post')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}))
}

exports.createPost = (req,res,next)=>{
    console.log("post test")
    const postObject = JSON.parse(req.body.post)
    delete postObject._id
    const p = new Post({
        ...postObject
    })
    p.save()
        .then(() => res.status(201).json({message : 'ok'}))
        .catch(error=> res.status(400).json({error}))
}