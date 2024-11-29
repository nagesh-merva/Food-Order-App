import React from 'react'

function LoadingPage() {
    return (
        <div className="fixed z-40 inset-0 flex items-center justify-center h-screen bg-zred">
            <div className="flex flex-col justify-center items-center text-center">
                <div
                    className="w-12 h-12 rounded-full border-8 border-gray-100 border-b-white animate-spin">
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">IT Food&Delivery Wala</h1>
                <p className="text-lg text-white">Preparing delicious food for you...</p>
            </div>
        </div>
    )
}

export default LoadingPage
