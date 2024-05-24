const express = require ('express')
const bookRoutes = require('./Routes/bookRoutes')
const userRoutes = require('./Routes/userRoute')
const cors = require ('cors')
const app = express ()
require('dotenv').config()

const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
app.use('/book',bookRoutes)
app.use('/user',userRoutes)
 
app.get('/',(req,res)=>{
    res.status(200).json({
        msg:"hello dhaniya"
    })
})


app.listen(3000)