import './VideosList.css';
import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
  const videosArr = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />);

  return <div className="ui relaxed divided list videos-list">{videosArr}</div>;
}

export default VideosList;
