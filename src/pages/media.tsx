import { useState, useEffect } from "react";
import { VideoData } from "../../data/media";
import { VideoThumbnail } from "react-video-thumbnail";

const Media: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentVideoIndex(index);
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
      VideoData[i].thumbnail = thumbnail; // Update the thumbnail field in the VideoData array
    }
  };

  useEffect(() => {
    generateThumbnails();
  }, []);

  const currentVideo = VideoData[currentVideoIndex];

  return (
    <div className="flex">
      <div className="w-3/4">
        {/* <h1>{currentVideo.title}</h1> */}
        <video src={currentVideo.videoSrc} controls />
      </div>
      <div className="w-1/4">
        <ul>
          {VideoData.map((video, index) => (
            <li key={video.id} onClick={() => handleThumbnailClick(index)}>
              <VideoThumbnail
                videoUrl={video.videoSrc}
                thumbnailHandler={(thumbnail: string) => {
                  VideoData[index].thumbnail = thumbnail; // Update the thumbnail field in the VideoData array
                }}
              />
              <img src={video.thumbnail} alt="Thumbnail" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
