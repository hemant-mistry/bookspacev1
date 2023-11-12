const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    genre:{type:String},
    quotes:{type:String},
    entryDate:{type:Date,default:Date.now}
})

const Posts = mongoose.model('Posts',postSchema,'posts')

const mySchemas = {'Posts':Posts}

module.exports = mySchemas;