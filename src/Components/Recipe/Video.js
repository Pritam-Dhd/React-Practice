import React from "react";

const Video = ({ items }) => {
  let embedUrl = "";
  const embedYouTubeVideo = () => {
    const videoUrl = items[0].strYoutube;
    const videoId = videoUrl.split("v=")[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  };
  embedYouTubeVideo();
  return (
    <>
      <h5 className="mt-4">Video:</h5>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={embedUrl}
          allowFullScreen
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Video;
