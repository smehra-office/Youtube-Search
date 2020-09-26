import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    let renderedList = videos.map((v) => <VideoItem video={v} onVideoSelect={onVideoSelect} key={v.id.videoId} />);
    return <div className='ui list'>{renderedList}</div>
};

export default VideoList;