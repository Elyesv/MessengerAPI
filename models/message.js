const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    autor:{type: String, required:true},
    message:{type: String, required:true},
    date:{type: Date, required:true},
    urlImage:{type: String, required:false}
})

module.exports = mongoose.model('Post', postSchema)