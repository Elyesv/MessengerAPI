var express = require('express');
const router = express.Router()
const userController = require('./../controllers/userControllers')

console.log('user route')

router.post('/login', userController.login)
router.post('/register', userController.signup)



module.exports = router