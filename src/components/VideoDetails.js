import React from 'react';

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) return null;
  
  const { title, description } = selectedVideo.snippet;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" width="560" height="315" allowFullScreen></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
