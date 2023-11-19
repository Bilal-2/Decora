import React from 'react'
import { TiTimes } from "react-icons/ti";

function SingleCard({ id, name, price, image, quantity, onRemove, onIncrease, onDecrease }) {

    return (
        <>
            <div className='flex gap-2 items-center my-2 bg-gray-50 p-4 rounded '>
                <div className='w-2/6 relative'>
                    <img src={image} alt="product" className='w-full h-16 object-cover rounded' />
                </div>
                <div className='w-4/6'>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="font-sans text-base flex-1 truncate mr-2 capitalize font-bold">{name}</h3>
                        <TiTimes onClick={onRemove} color="#ccc" size={22} className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-gray-600 text-base flex-1'>${price * quantity}</p>
                        <div className=' flex justify-between items-center'>
                            <button onClick={onDecrease} className='bg-[#94634b] px-2 text-white rounded'>-</button>
                            <span className="px-2">
                                {quantity}
                            </span>
                            <button onClick={onIncrease} className='bg-[#94634b] px-2 text-white rounded'>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCard