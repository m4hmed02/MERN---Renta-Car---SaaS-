import { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "buyer",
        profilePic: null
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target

        if (name == "profilePic") {
            setFormData({ ...formData, [name]: files[0] })
        } else {
            setFormData({ ...formData, [name]: value })
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password === formData.confirmPassword) {

            const data = new FormData()
            data.append("name", formData.name)
            data.append("email", formData.email)
            data.append("password", formData.password)
            data.append("role", formData.role)
            data.append("profilePic", formData.profilePic)

            try {
                let result = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/register`, {
                    "method": "POST",
                    body: data
                })
                let res = await result.json()
                console.log(res)
            } catch (e) {
                console.log("Unable to Register User!")
            }


        } else {
            console.log("Password Should be same")
        }
    }

    return (
        <div className='w-screen h-screen overflow-hidden relative'>

            <div className='w-full h-full absolute'>

                <img className='w-full h-full object-cover' src="/bgImages/LoginV2.png" alt="" />
            </div>

            <div className="relative top-1/2 -translate-y-1/2 w-1/2 flex flex-col items-center gap-4 text-white" >


                <form onSubmit={handleSubmit} encType='multipart/form-data' className=' flex flex-col gap-6  items-center w-1/2' >


                    <div className="title text-3xl font-bold">
                        Rental Car
                    </div>

                    <div className='w-full flex flex-col  gap-3'>


                        <input className='w-full outline-0 border rounded-md p-3 text-white' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />

                        <input className='w-full outline-0 border rounded-md p-3 text-white' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />

                        <input className='w-full outline-0 border rounded-md p-3 text-white' type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} />

                        <input className='w-full outline-0 border rounded-md p-3 text-white' type="password" placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

                        <div className='flex flex-col'>

                            <label htmlFor="role" className='font-semibold'>Account Type :</label>

                            <select
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="bg-transparent border px-3 py-2 rounded-md outline-none focus:bg-black"
                            >

                                <option value="buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>

                        </div>

                        <div className=''>

                            <span className='font-semibold'>Profile Photo (Optional) :</span>

                            <input
                                name="profilePic"
                                onChange={handleChange}
                                type="file"
                                id="profileImg"
                                className='w-full rounded-md border-white/30 text-white text-sm file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-black hover:file:bg-gray-200'
                            />
                        </div>


                        <div>
                            <span>Already have an account? </span>
                            <button className='italic' >Login Now!</button>
                        </div>
                    </div>


                    <button type='submit' className='bg-white text-black font-bold text-lg p-3 rounded-md w-full'>Register Now</button>
                </form>

            </div>

        </div>
    )
}

export default Register
