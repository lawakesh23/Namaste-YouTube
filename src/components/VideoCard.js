import React from 'react'

const VideoCard = ({data}) => {
    const { snippet, statistics } = data;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <div className=" p-2 w-72 shadow-lg m-2 rounded">
        <div className=""><img alt="thumbnail" className="" src={thumbnails.medium.url}/></div>
        <div className="text-gray-600 py-2">{title}</div>
        <div className="font-bold">{channelTitle}</div>
        <div>{statistics.viewCount} Views</div>
      </div>
    </div>
  )
}

export default VideoCard
