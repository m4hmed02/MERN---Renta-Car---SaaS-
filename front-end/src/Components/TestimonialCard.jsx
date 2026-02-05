import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className='bg-white rounded-2xl w-full p-5 flex flex-col gap-5'>
      
        <div className="comment flex items-center justify-between">
            <span className='font-semibold'>
                {props.comment}
            </span>
            <span>
                <img src="/icons/testomonial.svg" alt="" />
            </span>
        </div>

        <div className="disc text-sm">
            {props.disc}
        </div>

        <div className="username">
            <span></span>
            <span className='font-semibold'>
                {props.username}
            </span>
        </div>

    </div>
  )
}

export default TestimonialCard
