const express = require ('express')
const router = express.Router()
const Book = require ('../model/bookModel')
const {getBook} = require ('../Controller/BookController')


// const Data = [{
//         "id": 1,
//         "name": "Story Book",
//         "title": "The Jungle Book",
//         "author": "Rudyard Kipling",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 2,
//         "name": "Science Book",
//         "title": "A Brief History of Time",
//         "author": "Stephen Hawking",
//         "price": 15,
//         "category": "Science",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 3,
//         "name": "Story Book",
//         "title": "Moby Dick",
//         "author": "Herman Melville",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 4,
//         "name": "Fantasy Book",
//         "title": "The Hobbit",
//         "author": "J.R.R. Tolkien",
//         "price": 40,
//         "category": "Fantasy",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 5,
//         "name": "Mystery Book",
//         "title": "The Da Vinci Code",
//         "author": "Dan Brown",
//         "price": 25,
//         "category": "Mystery",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 6,
//         "name": "Classic Literature",
//         "title": "Pride and Prejudice",
//         "author": "Jane Austen",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 7,
//         "name": "Science Book",
//         "title": "Cosmos",
//         "author": "Carl Sagan",
//         "price": 50,
//         "category": "Science",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 8,
//         "name": "Biography",
//         "title": "The Diary of a Young Girl",
//         "author": "Anne Frank",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 9,
//         "name": "Fiction",
//         "title": "1984",
//         "author": "George Orwell",
//         "price": 30,
//         "category": "Fiction",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 10,
//         "name": "Children's Book",
//         "title": "Harry Potter and the Sorcerer's Stone",
//         "author": "J.K. Rowling",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 11,
//         "name": "Self-Help",
//         "title": "The Power of Habit",
//         "author": "Charles Duhigg",
//         "price": 20,
//         "category": "Self-Help",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 12,
//         "name": "Classic Literature",
//         "title": "To Kill a Mockingbird",
//         "author": "Harper Lee",
//         "price": 10,
//         "category": "Classic",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 13,
//         "name": "Historical Fiction",
//         "title": "The Book Thief",
//         "author": "Markus Zusak",
//         "price": 35,
//         "category": "Historical",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 14,
//         "name": "Classic Literature",
//         "title": "Great Expectations",
//         "author": "Charles Dickens",
//         "price": 0,
//         "category": "free",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     },
//     {
//         "id": 15,
//         "name": "Science Fiction",
//         "title": "Dune",
//         "author": "Frank Herbert",
//         "price": 20,
//         "category": "Science Fiction",
//         "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
//     }
// ]


router.get('/',getBook)


// router.post('/insert',async (req,res)=>{
//     console.log(Book)
//     const books = await Book.insertMany(Data) 
//     console.log("rchd")
//    if(!books){
//     return res.status(400).json({
//         msg:"error occured"
       
//     })
//    }
//    console.log("rchd2")
//    return res.status(200).json({
//     msg:"books updated successfully"
//    })
// })

module.exports =  router