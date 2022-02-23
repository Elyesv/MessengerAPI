const express = require('express');
const router = express.Router()
const postController = require('../controllers/controllers')

console.log('test route')

router.get('/', postController.getAllPost)
router.get('/:autor', postController.getPostAutor)
router.post('/', postController.createPost)


module.exports = router