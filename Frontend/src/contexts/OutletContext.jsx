import React, { createContext, useContext, useState, useEffect } from 'react'

const OutletContext = createContext()

export const useOutlet = () => useContext(OutletContext)

export const OutletProvider = ({ children }) => {
    const [selectedOutlet, setSelectedOutlet] = useState(() => {
        const storedValue = sessionStorage.getItem('selectedOutlet')
        return storedValue !== null ? storedValue : 'Mumbai'
    })

    const [Dishes, setDishes] = useState(() => {
        const storedValue = sessionStorage.getItem('Dishes')
        return storedValue !== null ? JSON.parse(storedValue) : []
    })

    useEffect(() => {
        sessionStorage.setItem('selectedOutlet', selectedOutlet)
    }, [selectedOutlet])

    useEffect(() => {
        sessionStorage.setItem('Dishes', JSON.stringify(Dishes))
    }, [Dishes])

    return (
        <OutletContext.Provider value={{ selectedOutlet, setSelectedOutlet, Dishes, setDishes }}>
            {children}
        </OutletContext.Provider>
    )
}