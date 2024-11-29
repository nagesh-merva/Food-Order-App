import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiChevronDown } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { useOutlet } from '../contexts/OutletContext'
import logo from '/logo.png'

function NavBar() {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false)
    const { selectedOutlet, setSelectedOutlet } = useOutlet()
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        fetchStatus()
        fetchStatus()
    }, [])

    const fetchStatus = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/Get_MUMBAI_STATUS")
            const data = await response.json()
            console.log("mumbai", data)
            if (!data.status) {
                setShowPopup(true)
            }
        } catch (error) {
            console.error("Error fetching Mumbai status:", error)
        }
    }

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    const handleOutletSelect = (outlet) => {
        setSelectedOutlet(outlet)
        setShowDropdown(false)
    }

    const outletAddresses = {
        Mumbai: "Taj Hotel, Mumbai , India",
        Goa: "Taj Hotel, Goa , India"
    }

    const GoToAcc = () => {
        navigate('/MyAccount')
    }

    return (
        <div className="relative flex justify-center items-center h-96 w-full bg-zred rounded-b-3xl drop-shadow-lg">
            {showPopup && (
                <div className="absolute top-10 left-0 w-full px-6 h-1/2 flex justify-center items-center drop-shadow-xl z-50">
                    <div className="relative bg-white p-8 rounded-lg shadow-lg">
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Mumbai outlet is Currently Not Accepting Orders
                        </h2>
                        <p className="text-lg text-gray-600">
                            Please check back after sometime later.
                        </p>
                    </div>
                </div>
            )}
            <button onClick={GoToAcc} className="absolute z-20 top-6 right-0 bg-white p-3 rounded-l-lg"><FaBars size={20} /></button>
            <div className="absolute top-6 left-4 w-full flex items-center">
                <FaMapMarkerAlt className="h-10 w-10 text-4xl text-white" />
                <div className="pl-3 flex flex-col">
                    <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                        <h1 className=" flex text-lg font-extrabold font-poppins text-black">
                            IT Food&Delivery Wala {selectedOutlet} <BiChevronDown size={24} className="ml-2" />
                        </h1>
                    </div>
                    {showDropdown && (
                        <div className="mt-1 rounded-md bg-white shadow-lg">
                            <div className="py-1">
                                <button
                                    onClick={() => handleOutletSelect('Mumbai')}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b-2 border-slate-100"
                                >
                                    Mumbai
                                    <p className="text-xs text-gray-500 mt-1">{outletAddresses['Mumbai']}</p>
                                </button>
                                <button
                                    onClick={() => handleOutletSelect('Goa')}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Goa
                                    <p className="text-xs text-gray-500 mt-1">{outletAddresses['Goa']}</p>
                                </button>
                            </div>
                        </div>
                    )}
                    <p className="w-56 h-10 text-left overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {outletAddresses[selectedOutlet]}
                    </p>
                </div>
            </div>
            <div className="pt-5 flex flex-col justify-center items-center">
                <img src={logo} className=" h-48 w-auto " alt="" />
                <h1 className=" px-10 text-center text-white font-normal">Get Your Maggie Delivered in 2-Minutes, Rest all in 45-minutes!</h1>
            </div>
            <button className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 drop-shadow-2xl">
                <h1 className=" px-5 py-3 font-semibold rounded-full bg-black text-white">Order Now</h1>
            </button>
        </div>
    )
}

export default NavBar
