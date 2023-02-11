import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from "react-router-dom";

const Watch = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
    },[])

  return (
    <div className="pt-2">
      <iframe width="860" height="415" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default Watch;
