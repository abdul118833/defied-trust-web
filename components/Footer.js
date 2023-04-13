import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16 text-gray-800 border-t">
                <div>
                    <p className="text-xs md:text-sm">Copyright © 2023 Defied Trust</p>
                </div>
                <div>
                    <div className="flex items-center sm:ml-6">
                        <a href="#" className="text-xs md:text-sm ml-4 md:ml-8">Instagram</a>
                        <a href="#" className="text-xs md:text-sm ml-4 md:ml-8">Twitter</a>
                        <a href="#" className="text-xs md:text-sm ml-4 md:ml-8">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer