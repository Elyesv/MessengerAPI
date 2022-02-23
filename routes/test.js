var express = require('express');
const router = express.Router()
const postController = require('./../controllers/test')

console.log('test route')

router.get('/', postController.getAllPost)
router.get('/single/:autor', postController.getPostAutor)
router.post('/', postController.createPost)
router.get('/modify/:id/:autor', postController.modifyPostId)
router.get('/delete/:id', postController.deletePostId)


module.exports = router