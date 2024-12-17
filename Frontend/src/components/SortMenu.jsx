import React, { useState, useRef, useEffect } from 'react'
import ProductCard from './ProductCard'
import { useOutlet } from '../contexts/OutletContext'
import { MdRestaurant } from "react-icons/md"
import { BiChevronDown } from 'react-icons/bi'

const SortedMenu = () => {
    const [selectedFilter, setSelectedFilter] = useState("")
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSubcategory, setSelectedSubcategory] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const { Dishes, setDishes } = useOutlet()
    const [loading, setLoading] = useState(false)
    const categoryRefs = useRef({})
    const subcategoryRefs = useRef({})
    const dishRefs = useRef({})

    console.log(Dishes)
    useEffect(() => {
        const fetchMenu = async () => {
            if (Dishes.length === 0) {
                setLoading(true)
                try {
                    const response = await fetch('http://localhost:8080/api/get_menu')
                    const menuData = await response.json()
                    setDishes(menuData.menu)
                } catch (error) {
                    console.error("Error fetching menu:", error)
                } finally {
                    setLoading(false)
                }
            }
            else {
                return
            }
        };
        fetchMenu()
    }, [])

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen)
        setSelectedCategory("")
        setSelectedSubcategory("")
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        setSelectedSubcategory("")
    }

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory)
        console.log("Subcategory clicked:", subcategory)
        setTimeout(() => {
            setIsPopupOpen(false)
        }, 300)
    }

    useEffect(() => {
        if (selectedSubcategory && subcategoryRefs.current[`${selectedCategory}-${selectedSubcategory}`]) {
            subcategoryRefs.current[`${selectedCategory}-${selectedSubcategory}`].scrollIntoView({ behavior: 'smooth' })
        }
    }, [selectedSubcategory, selectedCategory])

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter)
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleItemClick = (dishKey) => {
        if (dishRefs.current[dishKey]) {
            dishRefs.current[dishKey].scrollIntoView({ behavior: 'smooth' })
        }
    }

    const categories = [...new Set(Dishes.map(dish => dish.category))]
    const subcategories = selectedCategory ? Dishes.find(dish => dish.category === selectedCategory)?.subcategory : {}

    const Filters = ['All', 'veg', 'nonveg', 'noodles', 'momos', 'soup', 'gravy', 'rice', 'starter', 'kebab', 'shawarma', 'biryani']

    const filterDishes = (dishes, subcategory) => {
        if (!selectedFilter || selectedFilter === 'All') return dishes
        return dishes.filter(dish => {
            if (selectedFilter === 'veg' || selectedFilter === 'nonveg') {
                return dish.type === selectedFilter
            }
            return subcategory.toLowerCase() === selectedFilter
        })
    }

    const filteredDishes = searchTerm
        ? Dishes.flatMap(category =>
            Object.entries(category.subcategory).flatMap(([dishes]) =>
                dishes.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        )
        : []

    // console.log(filteredDishes)

    return (
        <div className="pt-3 bg-white h-auto w-full">
            <div className='py-5 flex flex-row items-center justify-center w-full'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <h1 className="font-poppins text-lg text-gray-600 px-4">OUR MENU</h1>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <button onClick={togglePopup} className="flex w-full bg-white pl-4 py-4 border-b-2 space-x-3">
                <MdRestaurant className='' size={24} />
                <h1 className="text-lg font-semibold tracking-wider">SORT ITEMS</h1>
                <BiChevronDown size={24} />
            </button>

            {isPopupOpen && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-poppins font-semibold mb-4">Select Category and Subcategory</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Categories</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {categories.map((category, index) => (
                                    <button key={index} className={`px-3 py-2 border-b-2 border-gray-300 rounded-lg text-left font-medium hover:bg-gray-100 ${selectedCategory === category ? 'bg-blue-100' : ''}`} onClick={() => handleCategoryClick(category)}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {selectedCategory && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2 mt-4">Subcategories of {selectedCategory}</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {Object.keys(subcategories).map((subcategory, index) => (
                                        <button key={index} className={`px-3 py-2 border-b-2 border-gray-300 rounded-lg text-left font-medium hover:bg-gray-100 ${selectedSubcategory === subcategory ? 'bg-blue-100' : ''}`} onClick={() => handleSubcategoryClick(subcategory)}>
                                            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex justify-end mt-4">
                            <button onClick={togglePopup} className="px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="py-5 px-3 h-fit w-full overflow-x-auto whitespace-nowrap space-x-5" style={{ scrollbarWidth: 'none' }}>
                {Filters.map((filter, index) => (
                    <button key={index} onClick={() => handleFilterClick(filter)} className="px-3 py-2 bg-white border-b-2 border-stone-200 rounded-2xl text-lg font-semibold font-sans text-slate-600 drop-shadow-xl">
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                ))}
            </div>
            <div className="mx-2 flex items-center justify-center py-4">
                <input
                    veg_nonveg="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search for items..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md"
                />
            </div>
            <div className="mx-2 px-4">
                <ul>
                    {filteredDishes.map((dish, index) => (
                        <li
                            key={index}
                            className="cursor-pointer text-gray-500 hover:text-blue-500 hover:underline"
                            onClick={() => handleItemClick(dish.name)}
                        >
                            {dish.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menu" >
                {loading ? (
                    <div className="flex flex-col justify-center items-center text-center">
                        <div
                            className="w-12 h-12 rounded-full border-8 border-gray-100 border-b-white animate-spin">
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Chef's Bhojan</h1>
                        <p className="text-lg text-white">Preparing delicious food for you...</p>
                    </div>
                ) : (
                    <>
                        {Dishes.map((category, index) => (
                            <div className='my-4 bg-white border-b-2' key={index} ref={el => categoryRefs.current[category.category] = el} >
                                <h2 className='px-4 py-2 font-semibold text-3xl'>{category.category}</h2>
                                {Object.keys(category.subcategory).map((subcategory, subIndex) => {
                                    const filteredDishes = filterDishes(category.subcategory[subcategory], subcategory)
                                    if (filteredDishes.length === 0) return null
                                    return (
                                        <div className="subcategory-list p-2 border-b-2" key={subIndex} ref={el => subcategoryRefs.current[`${category.category}-${subcategory}`] = el}>
                                            <h3 className='px-2 py-1 text-2xl font-semibold text-gray-600'>{subcategory} {category.category}</h3>
                                            <div className="dish-list">
                                                {filteredDishes.map((dish, dishIndex) => (
                                                    <div key={dishIndex} ref={el => dishRefs.current[dish.name] = el}>
                                                        <ProductCard key={dishIndex} dish={dish} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default SortedMenu
