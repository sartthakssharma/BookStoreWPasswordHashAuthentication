const User = require ('../model/userModel')
const bcryptjs = require ('bcryptjs')

const signup = async (req,res) =>{

    const {fullName,emailId,password} = req.body

    const exists = await  User.findOne({
        emailId : emailId
    })
   if(exists){
    return res.status(400).json({
        msg:"User already exists"
    })
   }

   const hashPassword = await bcryptjs.hash(password,10)

   const user = await User.create({fullName,emailId,password : hashPassword})
   if(user){
    return res.status(200).json({
        msg: "User Created Successfully",
        user:{
        _id : user._id,
        fullName: user.fullName,
        email : user.emailId
        }
    })
   }
}

const signin = async (req,res) =>{
    try{
        const {emailId,password} = req.body
        const user = await User.findOne({
        emailId
        })

        if(!user){
            return res.status(400).json({
                msg:"Invalid user"
            })
        }

        const isMatch = await bcryptjs.compare(password,user.password)
        
        if(!isMatch){
            return res.status(400).json("Invalid Password")
        }else{
            return res.status(200).json({
                message:"user authenticated successfully",
                user: {
                    _id : user._id,
                    fullName: user.fullName,
                    email : user.emailId
                }
            })
        }
    }catch(e){
        console.log(e)
    }
}

module.exports = { signup, signin };