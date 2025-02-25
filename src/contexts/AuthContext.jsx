import { createContext,useEffect,useState } from 'react'

export const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [token,setToken] = useState(null)
    useEffect(()=>{
        const currentToken = localStorage.getItem('token')
        if(currentToken){
            setToken(currentToken)
        }
    },[])
    return(
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}