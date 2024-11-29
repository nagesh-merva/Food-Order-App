
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('mycart')) || [])
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('myOrders')) || [])
    // console.log(cart)

    useEffect(() => {
        localStorage.setItem('mycart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('myOrders', JSON.stringify(orders))
    }, [orders])

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            }
            return [...prevCart, { ...item, quantity: 1 }]
        })
    }

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== itemId))
    }

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity } : item))
    }

    const placeOrder = () => {
        const orderId = Date.now()
        const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        const myOrder = {
            orderId,
            items: cart,
            totalCost
        }
        localStorage.setItem('myOrder', JSON.stringify(myOrder))
    }

    const emptyCart = () => {
        setCart([])
        localStorage.removeItem('mycart')
    }

    const deleteOrder = () => {
        localStorage.removeItem('myOrder')
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, placeOrder, emptyCart, deleteOrder }}>
            {children}
        </CartContext.Provider>
    )
}

