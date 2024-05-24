import { Navigate, Route, Routes } from "react-router-dom"
import Course from "./Components/Course"
import {Toaster} from 'react-hot-toast'
import Home from "./Home/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Signup from "./Components/Signup"
import { useAuth } from "./Components/Context/AuthProvider"
function App() {
  const [authUser, setAuthUser] = useAuth();
    console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Course/> : <Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes> 
    <Footer/>
    <Toaster/>
    </div>
    </>
  )
}

export default App
