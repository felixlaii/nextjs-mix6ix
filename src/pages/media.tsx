import React, { useState, useEffect } from "react";
import { VideoData } from "../../data/media";
import VideoThumbnail from "react-video-thumbnail";
import "bootstrap/dist/css/bootstrap.css";

const Media: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    const previousVideoIndex = currentVideoIndex;
    setCurrentVideoIndex(index);

    // Remove the clicked video from the VideoData array
    const updatedVideoData = VideoData.filter((_, i) => i !== index);
    VideoData.splice(0, VideoData.length, ...updatedVideoData);
  };

  const generateThumbnail = async (videoSrc: string): Promise<string> => {
    // Replace this code with your actual thumbnail generation logic
    // For example, you can use a third-party library or service to generate thumbnails
    // and return the thumbnail URL
    // Here, we're returning a placeholder URL
    return "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033460/mix_6ix_genesis_ho7bbz.mp4";
  };
  const generateThumbnails = async () => {
    for (let i = 0; i < VideoData.length; i++) {
      const video = VideoData[i];
      const thumbnail = await generateThumbnail(video.videoSrc);
      video.thumbnail = thumbnail; // Update the thumbnail field in the VideoData array
      video.showThumbnail = true; // Initialize the showThumbnail property
    }
  };

  useEffect(() => {
    generateThumbnails();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.target as HTMLVideoElement;
    vid.muted = true;
    vid.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.target as HTMLVideoElement;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  const currentVideo = VideoData[currentVideoIndex];

  return (
    <div className="flex">
      <div className="w-1/2">
        {currentVideo.showThumbnail ? (
          <img
            className="w-96 h-96"
            src={currentVideo.thumbnail}
            alt="Thumbnail"
          />
        ) : (
          <video className="w-96 h-96" src={currentVideo.videoSrc} controls />
        )}
      </div>
      <div className="w-1/4">
        <ul>
          {VideoData.map((video, index) => (
            <li key={video.id} onClick={() => handleThumbnailClick(index)}>
              {video.showThumbnail ? (
                <img
                  className="w-20 h-25"
                  src={video.thumbnail}
                  alt="Thumbnail"
                />
              ) : (
                <video
                  width="320"
                  height="240"
                  controls
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <source src={video.videoSrc} type="video/mp4" />
                </video>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
