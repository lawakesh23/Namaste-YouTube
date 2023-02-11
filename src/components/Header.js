import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
  const dispatch= useDispatch()
  const threeLineClicked = ()=>{
     dispatch(toggleMenu())
  }

  return (
    <div className="flex justify-between p-3 border shadow">
        <div className="flex h-6">
            <img alt="logo" onClick={()=>threeLineClicked()} className="w-14 cursor-pointer hover:border hover:rounded-full" src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png"/>
            <img alt="logo" className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
        </div>

        <div className="px-2 ">
            <input type="text" placeholder='Search Video' className="w-96 p-2 pl-3 border rounded-l-full" />
            <button className="px-3 rounded-r-full border p-2 bg-gray-100">Search</button>
        </div>
        <div className="">
            <img alt="profile" className="w-10" src="https://t3.ftcdn.net/jpg/05/26/72/48/360_F_526724825_fEKkOFrsAnTBW3G5Qc9VCZxArl3zWEdT.jpg"/>
        </div>
    </div>
  )
}

export default Header
