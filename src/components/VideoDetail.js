import React from 'react';

const VideoDetail = ({video}) => {
    //to catch the error message when the video is not selected (null) on load
    if(!video){
        return <div>Loading...</div>;
    }

    //YouTube video embed URL
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    //displays title of the video clicked
    return (
      <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
};

export default VideoDetail;