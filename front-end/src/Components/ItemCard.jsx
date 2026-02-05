import React from 'react'

const ItemCard = (props) => {
  return (
    <div className='w-full border border-[#E9E9E9] rounded-2xl'>

      <img className='w-full object-cover rounded-tr-2xl rounded-tl-2xl' src={props.imgSrc} alt="" />

      <div className="textContent p-3">

        <h4 className=''>
          {props.title}
        </h4>

        <div className="owner">
          <span></span>
          <span className='text-sm'>{props.owner}</span>
        </div>

        <p className='font-semibold'>
          {props.price}
        </p>
      </div>

    </div>
  )
}

export default ItemCard
