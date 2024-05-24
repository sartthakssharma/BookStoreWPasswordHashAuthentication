const express = require ('express')
const router = express.Router()
const Book = require ('../model/bookModel')
const { signup, signin } = require('../Controller/UserController');

router.post('/signup',signup)
router.post('/signin',signin)

module.exports = router