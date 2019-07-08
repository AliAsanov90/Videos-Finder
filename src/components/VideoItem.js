import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails, description } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui middle aligned image" src={thumbnails.high.url} alt={description} />
      <div className="content">
        <div className="header video-item__header">{title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
