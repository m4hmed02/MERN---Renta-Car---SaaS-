import { useEffect, useState } from "react"

const CommentCard = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {

        const fetchUser = async () => {
            let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/getUserById/${props.userId}`, {
                credentials: "include"
            })

            let result = await res.json()
            setUser(result.userData)
        }

        fetchUser()
    }, [props.userId])


    return (
        <div className="p-5 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-black transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex gap-3 sm:gap-4 items-start">
                    <img
                        src={user?.profilePic ? `${import.meta.env.VITE_SERVER_URL}/userAvatars/${user.profilePic}` : `${import.meta.env.VITE_SERVER_URL}/userAvatars/default.png`}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover bg-gray-300 shrink-0"
                    />
                    <div>
                        <h4 className="m-0 text-base sm:text-lg font-bold text-gray-900">{user?.name || "Anonymous"}</h4>

                    </div>
                </div>
                <div className="flex gap-1">
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">{props.time}</span>
                </div>
            </div>
            <p className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                {props.comment}
            </p>
        </div>
    )
}

export default CommentCard