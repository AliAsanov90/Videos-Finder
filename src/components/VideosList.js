import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ videos }) => {
  const videosArr = videos.map(video => <VideoItem key={video.id.videoId} video={video} />);

  return <div>{videosArr}</div>;
}

export default VideosList;
