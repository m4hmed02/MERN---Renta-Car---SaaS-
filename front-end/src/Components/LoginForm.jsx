import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const LoginForm = (props) => {

    const [showForm, setshowForm] = useState(false)
    const {isLoggedIn} = useContext(AuthContext)

    const [loginForm, setloginForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setloginForm({ ...loginForm, [name]: value })
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/login`, {
            "method": "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(loginForm)
        })

        let res = await response.json()
        console.log(res)
    }


    return (
        <>{
            // && props.showLoginForm 
            !isLoggedIn ?
            <div className=' w-full h-full bg-white/50 backdrop-blur-md fixed top-1/2 -translate-y-1/2  z-10' >

                <div className="w-[25%] mx-auto p-5 flex flex-col gap-10 rounded-md shadow-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white">

                    <div className='flex items-center justify-between'>
                        <span className='text-2xl font-bold'>Login Now!</span>
                        <img src="/icons/close.svg" alt="" />
                    </div>

                    <form onSubmit={handleSubmit} className=' flex flex-col gap-6  items-center' >

                        <div className='w-full flex flex-col  gap-3'>

                            <input
                                className='w-full outline-0 border rounded-md p-3 text-black'
                                type="email"
                                placeholder='Email'
                                name='email'
                                value={loginForm.email}
                                onChange={handleChange}
                            />

                            <input
                                className='w-full outline-0 border rounded-md p-3 text-black'
                                type="password"
                                placeholder='Password'
                                name="password"
                                value={loginForm.password}
                                onChange={handleChange}
                            />


                            <div>
                                <span>Don't have an account? </span>
                                <button className='italic' >Register Now!</button>
                            </div>
                        </div>


                        <button
                            className='bg-black text-white font-bold text-lg p-3 rounded-md w-full cursor-pointer'
                            type="submit"
                        >
                            Login
                        </button>
                    </form>

                </div>
            </div>
            :
            <></>
        }
        </>
    )
}

export default LoginForm
