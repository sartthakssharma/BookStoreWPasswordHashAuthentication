import toast from "react-hot-toast"
import { useAuth } from "./Context/AuthProvider"

const Logout = () => {
    const [authUser, setAuthUser]  = useAuth()
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("logout successfull")
            window.location.reload()
        }catch(e){
            toast.error("error occured")
        }
    }
  return (
    <div>
        <button onClick= {handleLogout} className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer">Logout</button>
    </div>
  )
}

export default Logout