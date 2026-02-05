import { Link, Links } from "react-router-dom"

const Header = () => {
    return (
        <nav className="absolute w-full flex items-center justify-around p-5 z-10">

            <div className="left flex items-center gap-10">
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

                <div className="button flex items-center gap-1 border border-white rounded-xl px-2 py-1">
                    
                    <img src="/profile.svg" alt="" />
                    <button className="text-white font-light cursor-pointer">SignIn</button>

                </div>

            </div>

        </nav>
    )
}

export default Header
