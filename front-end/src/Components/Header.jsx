import { Link, Links } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Header = () => {

    const { isLoggedIn, user } = useContext(AuthContext)

    console.log(`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user.profilePic}`)

    return (
        <nav className="absolute w-full flex items-center justify-around p-5 z-10">

            <div className="left flex items-center gap-10 text-lg">

                <div className="font-bold">
                    Rental Car
                </div>

                <div className="links flex gap-5">

                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Profile</Link>

                </div>

            </div>

            <div className="right flex items-center">


                {
                    isLoggedIn ?
                        <div className="avatar flex items-center gap-2 text-white bg-black/20 p-2 rounded-full">


                            <img
                                src={`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user.profilePic}`}
                                alt="Profile"
                                className=" w-10 h-10 rounded-full object-contain border border-white  bg-white"
                            />

                            <span>
                                Hey, {user.name}
                            </span>
                        </div>
                        :
                        <div className="button flex items-center gap-1 border border-white rounded-xl px-2 py-1">

                            <img src="/profile.svg" alt="" />
                            <button className="text-white font-light cursor-pointer">SignIn</button>

                        </div>
                }
            </div>

        </nav>
    )
}

export default Header
