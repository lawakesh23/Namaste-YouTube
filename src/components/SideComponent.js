import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const SideComponent = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null
  return (
    <div className="w-64 ">
        <ul className="text-center ">
            <li className="p-2 hover:bg-gray-200 mt-2 rounded-lg bg-gray-200 cursor-pointer"><Link to="/">Home </Link></li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Shorts</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Subscriptions</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Library</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">History</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Your videos</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Watch Later</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Explore</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Tranding</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Music</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Movies</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Live</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Gaming</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">News</li>

        </ul>
    </div>
  )
}

export default SideComponent
