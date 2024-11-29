import React from 'react'
import menuItems from '../js/itemschoice'
import { useNavigate } from 'react-router-dom'

function ItemsChoice() {
    const middleIndex = Math.ceil(menuItems.length / 2)
    const firstRowItems = menuItems.slice(0, middleIndex)
    const secondRowItems = menuItems.slice(middleIndex)
    const navigate = useNavigate()

    const handleGenreClick = (genre) => {
        setTimeout(() => {
            navigate(`/items/${genre.toLowerCase()}`)
        }, 500)
    }

    return (
        <div className="pt-14 flex flex-col items-center justify-center overflow-x-hidden">
            <div className=' flex flex-row items-center justify-center w-full'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <h1 className="font-poppins text-lg text-gray-600 px-4">WHAT'S ON YOUR MIND?</h1>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className='pt-5 pl-4 h-full w-full overflow-x-auto whitespace-nowrap' style={{ scrollbarWidth: 'none' }}>
                <div className=''>
                    {firstRowItems.map((item, index) => (
                        <div key={index} className="inline-block max-w-xs p-2 h-24 w-24 mx-2 bg-white rounded-3xl" onClick={() => handleGenreClick(item.name)}>
                            <img src={item.imageSrc} alt={item.name} className=" drop-shadow-xl w-fit h-20  object-cover rounded-t-lg" />
                            <div className="p-2">
                                <p className="text-gray-800 font-semibold text-center">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=''>
                    {secondRowItems.map((item, index) => (
                        <div key={index} className="inline-block max-w-xs p-2 h-24 w-24 mx-2 bg-white rounded-3xl" onClick={() => handleGenreClick(item.name)}>
                            <img src={item.imageSrc} alt={item.name} className="  drop-shadow-xl w-fit h-20  object-cover rounded-t-lg" />
                            <div className="p-2">
                                <p className="text-gray-800 font-semibold text-center">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemsChoice