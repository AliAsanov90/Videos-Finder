import React from 'react';

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) return null;
  
  const { thumbnails, title, description } = selectedVideo.snippet;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} frameborder="0" title="video"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
      <img src={thumbnails.high.url} alt={description}/>
    </div>
  );
}

export default VideoDetails;

// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen

