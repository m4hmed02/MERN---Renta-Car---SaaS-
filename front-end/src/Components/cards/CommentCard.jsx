
const CommentCard = () => {
    return (
        <div className="p-5 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-black transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex gap-3 sm:gap-4 items-start">
                    <img
                        src="https://via.placeholder.com/40x40?text=User"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover bg-gray-300 shrink-0"
                    />
                    <div>
                        <h4 className="m-0 text-base sm:text-lg font-bold text-gray-900">Michael Johnson</h4>
                        <span className="block text-xs sm:text-sm text-gray-500 mt-1">2 weeks ago</span>
                    </div>
                </div>
                <div className="flex gap-1">
                    <span className="text-base sm:text-lg text-amber-400 tracking-wider">★★★★★</span>
                </div>
            </div>
            <p className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Best investment! Purchased 6 months ago and haven't had any issues. Customer service is also fantastic.
            </p>
        </div>
    )
}

export default CommentCard