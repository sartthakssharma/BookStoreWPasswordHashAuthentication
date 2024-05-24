import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Signup = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = async (data) =>{
        console.log(data)
        const userInfo = {
            fullName:data.fullName,
            emailId:data.emailId,
            password:data.password
        }
       await axios.post('http://localhost:3000/user/signup',userInfo)
        .then((response)=>{
            console.log(response.data)
            if(response.data){
                toast.success("Signup Successful")
                navigate('/course')
            }
            localStorage.setItem("Users",JSON.stringify(response.data))
        })
        .catch((e) =>{
            console.log(e)
            toast.error('some error occured')
        })
    }

  return (
<div className='flex h-screen items-center justify-center border shadow-lg'>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
        <h3 className="font-bold text-lg">Signup</h3>
        <div className="mt-4 space-y-2">
            <span>Full Name</span>
            <br/>
            <input type="text" {...register("fullName", { required: true })} placeholder="Enter your name" className="w-80 px-3 border rounded-md"/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input type="email" {...register("emailId", { required: true })} placeholder="Enter your email" className="w-80 px-3 border rounded-md"/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4 space-y-2">
            <span>Password</span>
            <br/>
            <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="w-80 px-3 border rounded-md"/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
            <div className="flex justify-around items-center mt-5">
                <button className="bg-pink-500 text-white rounded-md px-3 py-2">Signup</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup