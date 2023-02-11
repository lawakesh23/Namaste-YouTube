import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API  } from '../utils/constant';
import {Link} from "react-router-dom"

const VideoContainer = () => {
    const [videosData, setVideoData] =useState([]);

    useEffect(()=>{
        FetchYouTubeData();
    },[])

    const FetchYouTubeData= async ()=>{
        const Apidata = await fetch(YOUTUBE_VIDEOS_API )
        const data = await Apidata.json();
        setVideoData(data.items)
    }
    console.log(videosData)

  return (
    <div className="flex flex-wrap">
      {videosData.map((videoData)=> <Link to={"/watch?v=" + videoData.id}><VideoCard data={videoData}/> </Link>)}
    </div>
  )
}

export default VideoContainer
