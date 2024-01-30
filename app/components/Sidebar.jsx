'use client'

import { UseSelector, useSelector } from "react-redux"

const Sidebar = () => {
    const {name} = useSelector((state) => state.profile)
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-4 hidden md:block">
            {name == '' ? 'No Name' : name}
        </div>
    )
}

export default Sidebar
