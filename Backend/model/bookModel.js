require('dotenv').config();
const mongoose = require('mongoose')

try{
    mongoose.connect(process.env.URI)
}catch(e){
    console.log(e)
}

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    catagor:String,
    image:String,
    title:String
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book