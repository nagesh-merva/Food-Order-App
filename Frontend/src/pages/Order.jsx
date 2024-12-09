import React from 'react'
import OrderForm from '../components/orderForm'
import { CartProvider } from "../contexts/CartContext"
import DisplayOrder from '../components/DisplayOrder'
import { OutletProvider } from '../contexts/OutletContext'

function Order() {

    return (
        <CartProvider>
            <div className=' h-screen bg-slate-50 '>
                <OutletProvider>
                    <OrderForm />
                </OutletProvider>
                <DisplayOrder />
            </div>
        </CartProvider>
    )
}

export default Order
