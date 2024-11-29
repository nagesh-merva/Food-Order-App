import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import LoadingPage from './loading'
import ProductCard from './ProductCard'
import Cart from '../components/cart'
import { useOutlet } from '../contexts/OutletContext'
import { FaArrowLeft } from 'react-icons/fa'

function DisplayGenre() {
    const { genre } = useParams()
    const { Dishes } = useOutlet()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [filteredItems, setFilteredItems] = useState([])

    const GoBack = () => {
        navigate('/')
    }

    const getItemsByGenre = (genre) => {
        const normalizedGenre = genre.toLowerCase()
        let filteredItems = []

        Dishes.forEach((category) => {
            Object.keys(category.subcategory).forEach((subcategoryKey) => {
                category.subcategory[subcategoryKey].forEach((item) => {
                    // Normalize the genre of the item for comparison
                    if (item.genre && item.genre.toLowerCase() === normalizedGenre) {
                        filteredItems.push(item)
                    }
                })
            })
        })

        return filteredItems
    }

    useEffect(() => {
        setLoading(true)
        const filteredItems = getItemsByGenre(genre)
        setFilteredItems(filteredItems)
        setLoading(false)
    }, [genre, Dishes])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div className='mb-80'>
            <button onClick={GoBack} className='z-20 fixed top-5 right-3 bg-black p-4 rounded-full'>
                <FaArrowLeft size={20} color='white' />
            </button>
            <div className="pt-14 flex flex-col items-center justify-center overflow-x-hidden">
                <h1 className="mb-4 px-5 py-3 bg-zred rounded-full font-poppins text-2xl text-white font-semibold ">
                    Items of {genre.toUpperCase()}
                </h1>
                <div className="flex flex-wrap justify-center">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((dish, index) => (
                            <ProductCard key={index} dish={dish} />
                        ))
                    ) : (
                        <p className='text-lg font-bold font-poppins px-5 text-center'>Wait a second... getting your Choice of food right now !!!</p>
                    )}
                </div>
            </div>
            <Cart />
        </div>
    )
}

export default DisplayGenre
