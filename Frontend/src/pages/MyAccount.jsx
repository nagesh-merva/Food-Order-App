import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import logo from '/logo.png'
import Footer from '../components/footer'

function MyAccount() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('myOrders')) || []

        const convertDate = (dateStr) => {
            const [datePart, timePart] = dateStr.split(', ')
            const [day, month, year] = datePart.split('/')
            return new Date(`${year}-${month}-${day}T${timePart}`)
        }

        const sortedOrders = storedOrders.sort((a, b) => convertDate(b.date) - convertDate(a.date))
        setOrders(sortedOrders)
    }, [])

    console.log(orders)

    const GoBack = () => {
        navigate('/')
    }

    const deleteOrders = () => {
        localStorage.removeItem('myOrders')
        setOrders([])
    }

    const openReviewPage = () => {
        window.open('https://search.google.com/local/writereview?placeid=ChIJC4txHOe7vzsRGMAxZVoyl8k&source=g.page.m._&laa=merchant-review-solicitation', '_blank');
    }

    return (
        <div>
            <div className='h-screen w-auto overflow-y-auto'>
                <div className='flex items-center h-24 bg-zred rounded-b-3xl'>
                    <img src={logo} className='px-5 h-16' alt="Chef's Bhojan Logo" />
                    <h1 className="flex text-xl font-extrabold font-poppins text-black">IT Food&Delivery Wala</h1>
                </div>
                <button onClick={GoBack} className='z-20 fixed top-8 right-3 bg-black p-4 rounded-full'>
                    <FaArrowLeft size={20} color='white' />
                </button>
                <h1 className="pt-5 text-3xl font-bold text-center mb-5">My Orders</h1>
                {orders.length === 0 ? (
                    <p className="text-center text-lg">You have no orders yet.</p>
                ) : (
                    <div className="space-y-5">
                        <h1 className="text-center text-md font-semibold mb-3 py-2 mx-5 border-y-2">Get your Orders Delivered in just 30-45 mins</h1>
                        {orders.map((order) => (
                            <div key={order.orderId} className="p-5 bg-white shadow rounded-md">
                                <h2 className="text-xl font-bold mb-3">Order ID: {order.orderId}</h2>
                                <p className="text-gray-600 mb-3">Date: {(order.date)}</p>
                                <div className="mb-3">
                                    <h3 className="text-lg font-semibold">Items:</h3>
                                    <ul className="list-disc pl-5">
                                        {order.items.map((item) => (
                                            <li key={item.id} className="mb-2">
                                                <div className="flex justify-between">
                                                    <span>{item.name} (x{item.quantity})</span>
                                                    <span>₹{parseInt(item.price, 10).toFixed(2)}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-lg font-bold">Total Cost: ₹{order.totalCost}</p>
                                <button onClick={openReviewPage} className='mt-2 px-4 py-1 border-2 border-gray-200 rounded-2xl bg-amber-300 text-md font-poppins font-thin drop-shadow-lg'>Review Order</button>
                            </div>
                        ))}
                    </div>
                )}
                <div className=' mt-5 flex flex-col items-center'>
                    <button onClick={deleteOrders} className="bg-red-500 text-white  px-4 py-2 rounded-md mb-4 ml-4">
                        Clear Orders
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyAccount
