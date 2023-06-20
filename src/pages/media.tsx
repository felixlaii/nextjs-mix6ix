import { useEffect, useState } from "react";
import { VideoData } from "../../data/media";
import VideoList from "@/components/VideoList";

const Media: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const [otherVideos, setOtherVideos] = useState(
    VideoData.filter((video) => video.id !== selectedVideo.id)
  );

  const handleVideoSelect = (video: (typeof VideoData)[number]) => {
    setSelectedVideo(video);
    setOtherVideos(VideoData.filter((v) => v.id !== video.id));
  };

  useEffect(() => {
    setSelectedVideo(VideoData[0]);
    setOtherVideos(VideoData.slice(1));
  }, []);

  return (
    <>
      <div className="primary-video">
        <video
          className="primary-video__video"
          src={selectedVideo.videoSrc}
          controls
        />
      </div>

      <ul>
        {otherVideos.map((video) => (
          <li
            className="w-100"
            key={video.id}
            onClick={() => handleVideoSelect(video)}
          >
            <video width="320" height="240" controls>
              <source src={video.videoSrc} type="video/mp4" />
            </video>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Media;
