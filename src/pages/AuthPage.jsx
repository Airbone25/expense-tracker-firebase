import React, { useContext } from 'react'
import { FcGoogle } from "react-icons/fc"
import auth_page_bg from '../assets/auth_page_bg.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth,googleAuth } from '../config/firebase_config'
import { signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../contexts/AuthContext'

function AuthPage() {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleSignIn(){
    try{
      const results = await signInWithPopup(auth,googleAuth)
      console.log(results.user)
      localStorage.setItem('token',results.user.accessToken)
      authContext.setToken(results.user.accessToken)
      navigate('/tracker')
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div style={{backgroundImage: `url(${auth_page_bg})`}} className="relative flex items-center justify-center min-h-screen">
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)'}} className="absolute inset-0"></div>
      <div className="relative z-10 p-10 bg-white shadow-2xl rounded-3xl text-center w-96">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Expense Tracker</h1>
        <p className="text-gray-500 mb-6 italic">“Manage your finances, secure your future.”</p>
        <p className="text-gray-600 mb-6">Sign in to track and control your expenses effortlessly.</p>
        <button
          onClick={handleSignIn}
          className="flex items-center justify-center space-x-3 px-5 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 w-full"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-lg font-medium">Sign in with Google</span>
        </button>
        <Link to='/'>
          <p className="text-blue-600 mt-5 font-bold hover:underline">Go To Home Page</p>
        </Link>
      </div>
    </div>
  )
}

export default AuthPage