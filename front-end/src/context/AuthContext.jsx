import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setisLoggedIn] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/getUser`, {
                    credentials: "include"
                })


                if (res.status == 401) {
                    setisLoggedIn(false)
                    setUser(null)
                } else {
                    const data = await res.json()
                    setisLoggedIn(true)
                    setUser(data.userData)
                }

            } catch (e) {
                setisLoggedIn(false)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkAuth()
    }, [])


    const logout = async ()=>{
        await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/getUser`,{
            credentials: "include"
        })

        setUser(null)
        setLoading(false)
    }

    return(
        <AuthContext.Provider value={{
            user,
            isLoggedIn,
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}