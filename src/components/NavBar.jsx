import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase_config'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../contexts/AuthContext'

function NavBar() {
  const authContext = useContext(AuthContext)
  async function logout(){
    await signOut(auth)
    localStorage.removeItem('token')
    authContext.setToken(null)
  }
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Expense Tracker</h1>
        {!authContext.token && <Link to="/auth">
          <button className="bg-blue-600 border-2 border-transparent text-white font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all duration-200">Sign In</button>
        </Link>}
        {authContext.token && <button onClick={logout} className="bg-blue-600 border-2 border-transparent text-white font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all duration-200">Logout</button>}
    </header>
  )
}

export default NavBar