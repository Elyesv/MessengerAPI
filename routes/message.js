const express = require('express');
const router = express.Router()
const postController = require('../controllers/messageControllers');
const auth = require('../middleware/auth');

console.log('message route')

router.get('/', auth, postController.getAllPost)
router.get('/single/:autor', auth, postController.getPostAutor)
router.post('/', auth, postController.createPost)
router.post('/modify', auth, postController.modifyPost)
router.delete('/delete', auth, postController.deletePostId)


module.exports = router