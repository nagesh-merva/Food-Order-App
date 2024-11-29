import React from 'react'
import VegIcon from '../assets/Veg_symbol.svg'
import NonVegIcon from '../assets/Non_veg_symbol.svg'
import dummydish from '../assets/photos/dummydish.jpg'
import { useCart } from '../contexts/CartContext'

const ProductCard = ({ dish }) => {
    const { addToCart } = useCart()

    const imgSrc = dish.img ? dish.img : dummydish

    return (
        <div className="dish-item px-2 py-4 grid grid-cols-2 gap-2 items-center border-b-2 border-dashed">
            <div className="dish-info">
                <div className="dish-type-icons">
                    {dish.type === 'veg' ? (
                        <img className='mx-1 h-4 w-4' src={VegIcon} alt="" />
                    ) : (
                        <img className='mx-1 h-4 w-4' src={NonVegIcon} alt="" />
                    )}
                </div>
                <h3 className=' py-4 px-1 text-lg text-black font-semibold'>{dish.name}</h3>
                <div className='flex'>
                    <p className='py-1 px-1 text-lg text-black font-semibold'>₹{dish.price}</p>
                    <p className='py-1 px-1 text-lg text-gray-400 font-semibold line-through'>{parseInt(dish.price, 10) + 10}</p>
                </div>
                <p className='py-1 px-1 text-[13px] text-slate-800 font-normal tracking-wide'>{dish.description.toLowerCase()}</p>
            </div>
            <div className='relative h-48 w-full flex justify-center'>
                <img src={imgSrc} className='h-40 w-40 rounded-3xl drop-shadow-xl shadow-slate-600' loading="lazy" alt="" />
                <button onClick={() => addToCart(dish)} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 px-10 py-2 text-xl bg-slate-100/90 text-amber-500 font-poppins font-bold border-2 border-amber-500 rounded-xl'>ADD</button>
            </div>
        </div>
    )
}

export default ProductCard
