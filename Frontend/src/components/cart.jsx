import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { FaArrowRight } from 'react-icons/fa'
import LoadingPage from './loading'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, placeOrder, emptyCart } = useCart()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const mainDivRef = useRef(null)
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    const getHeaderText = () => {
        if (cart.length === 0) {
            return "Add Items To Cart"
        } else if (cart.length === 1) {
            return "1 item added"
        } else {
            return `${cart.length} items added`
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const incrementQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        updateQuantity(id, item.quantity + 1);
    }

    const decrementQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        }
    }

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
            return
        }
        setLoading(true)
        placeOrder()
        setTimeout(() => {
            navigate('/order')
        }, 500)
    }

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div id="mainDiv" ref={mainDivRef} className={`fixed bottom-0 w-full ${expanded ? 'cart-expanded' : 'cart-shrinked'}`}>
            <button onClick={scrollToTop} className='absolute -top-4 right-8 bg-black border-2 drop-shadow-lg text-white text-semibold font-poppins text-sm p-4 rounded-full '>TOP</button>
            <div className="flex flex-col justify-center items-center bg-zred h-32 w-screen rounded-t-3xl border-2 border-b-zred shadow-top shadow-black">
                <button onClick={toggleExpand} className="flex justify-center w-full h-8">
                    <div className="h-1 w-8 bg-white rounded-full"></div>
                </button>
                <div className="flex justify-center items-center space-x-2">
                    <h1 className="text-xl font-semibold text-white font-poppins">{getHeaderText()}</h1>
                    <button className="bg-black h-8 w-8 p-1 rounded-full flex justify-center items-center" onClick={toggleExpand}>
                        <FaArrowRight color="white" size={18} />
                    </button>
                </div>
                <p className="pt-2 text-sm font-thin text-white font-poppins">Get a flat 20% discount on your order</p>
            </div>
            <div className="pt-4 h-full w-screen Cart-items bg-zred overflow-y-auto">
                {cart.length === 0 ? (
                    <p className=" text-xl  font-bold  underline decoration-2 decoration-wavy decoration-red-500 text-center text-white">No items in cart</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center px-6 p-2 border-b-2 border-dotted space-y-2">
                            <div className='space-y-2'>
                                <h3 className=' text-lg text-white font-poppins font-semibold'>{item.name}</h3>
                                <p className=' text-md text-white font-poppins font-semibold'>Price: ₹{item.price}</p>
                                <div className="flex items-center">
                                    <button onClick={() => decrementQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded-l-lg border-2 border-sky-300">-</button>
                                    <span className="bg-white px-3 py-1 border-t border-b">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded-r-lg border-2 border-sky-300">+</button>
                                </div>
                            </div>
                            <button className=' px-5 py-2 border-2 text-lg font-poppins font-semibold text-red-100 border-red-100 rounded-2xl bg-red-500/90' onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
                <div className='px-10 pt-5 pb-40'>
                    <button onClick={handlePlaceOrder} className=' my-6 py-2 h-auto w-full border-2 text-lg font-poppins font-semibold text-white border-red-100 rounded-lg bg-red-500/90 '>Place Order</button>
                    <h1 className=' text-sm text-white font-poppins font-thin text-center'>Get your Garma Garm happy meal at Home </h1>
                </div>
                <div className='flex flex-col mx-10'>
                    <button className=' px-5 py-2 border-2 border-red-500 bg-red-200 rounded-lg' onClick={emptyCart}>Empty Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
