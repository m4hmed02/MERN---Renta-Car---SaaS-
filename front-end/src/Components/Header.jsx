import { Link, Links } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Header = () => {

    const { isLoggedIn, user } = useContext(AuthContext)
    const [profileDropdown, setprofileDropdown] = useState(false)

    const handleProfileDropdown = () => {
        if (profileDropdown) {
            setprofileDropdown(false)
        } else {
            setprofileDropdown(true)
        }
    }


    return (
        <nav className="absolute w-full flex items-center justify-around p-6 z-20 bg-black/95 text-white text-sm">

            <div className="left flex items-center gap-10 ">

                <div className="font-bold text-xl">
                    Rental Car
                </div>

                <div className="links flex gap-5">

                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Browse Cars</Link>
                    {
                        isLoggedIn ?
                            <Link to="/profile">Profile</Link> : <></>
                    }

                    {
                        isLoggedIn ?

                            user.role == "Seller" ?
                                <Link to="/addcar">Add Car</Link>
                                :
                                <Link to="/">Cart</Link>

                            :
                            <></>

                    }

                </div>

            </div>

            <div className="right flex items-center">


                {
                    isLoggedIn ?
                        <div onClick={handleProfileDropdown} className="avatar flex flex-col items-center gap-2 text-white bg-white/15 pl-2 pr-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/25 absolute  top-[15%]  ">

                            <div className="flex items-center gap-2">
                                <img
                                    src={`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user.profilePic}`}
                                    alt="Profile"
                                    className=" w-10 h-10 rounded-full object-contain border border-white  bg-white"
                                />

                                <span>
                                    Hey, {user.name}
                                </span>
                            </div>
                            {
                                profileDropdown ?
                                    <div className="flex flex-col gap-2 mt-2">
                                        <Link to="/">Profile</Link>
                                        <Link to="/">About</Link>
                                        <Link to="/">Contact Us</Link>
                                        <Link to="/">logout</Link>
                                    </div> : <></>
                            }
                        </div>
                        :
                        <button
                            className="button flex items-center gap-1 border border-white rounded-xl px-2 py-1 cursor-pointer hover:bg-white/15 active:bg-white/25"
                        >

                            <img src="/profile.svg" alt="" />
                            <span className="text-white font-light">SignIn</span>

                        </button>
                }
            </div>

        </nav>
    )
}

export default Header
