import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/cart'
import Order from './pages/Order'
import ItemsPage from './pages/Itemspage'
import MyAccount from './pages/MyAccount'

function App() {
  return (
    <div className='w-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route exact path="/items/:genre" element={<ItemsPage />} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
    </div>
  )
}

export default App
