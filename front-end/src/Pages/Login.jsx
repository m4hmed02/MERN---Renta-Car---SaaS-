import { useState } from 'react'

const Login = () => {

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
        <div className='w-screen h-screen overflow-hidden relative'>

            <div className='w-full h-full absolute'>

                <img className='w-full h-full object-cover' src="/bgImages/LoginV2.png" alt="" />
            </div>

            <div className="relative top-1/2 -translate-y-1/2 w-1/2 flex flex-col items-center gap-4 text-white" >


                <form onSubmit={handleSubmit} className=' flex flex-col gap-6  items-center w-1/2' >


                    <div className="title text-3xl font-bold">
                        Rental Car
                    </div>

                    <div className='w-full flex flex-col  gap-3'>

                        <input
                            className='w-full outline-0 border rounded-md p-3 text-white'
                            type="email"
                            placeholder='Email'
                            name='email'
                            value={loginForm.email}
                            onChange={handleChange}
                        />

                        <input
                            className='w-full outline-0 border rounded-md p-3 text-white'
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
                        className='bg-white text-black font-bold text-lg p-3 rounded-md w-full'
                        type="submit"
                    >
                        Login
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Login
