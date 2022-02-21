var express = require('express');
var app = express();
const router = express.Router()
const postController = require('./../controllers/test')

console.log('test route')

router.get('/test',(req,res,next)=>{
    console.log('get all post')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}))
})


module.exports = router