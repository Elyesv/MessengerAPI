const mongoose = require('mongoose')
const uniValid = require('mongoose-unique-validator')

const userModel = mongoose.Schema({
    email:{type: String, required:true, unique: true},
    password:{type: String, required:true},
})

userModel.plugin(uniValid)

module.exports = mongoose.model('User', userModel)