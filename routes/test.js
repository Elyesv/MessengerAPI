var express = require('express');
const router = express.Router()
const postController = require('./../controllers/test')

console.log('test route')

router.get('/test', postController.getAllPost)
router.get('/test/:autor', postController.getPostAutor)
router.post('/test', postController.createPost)


module.exports = router