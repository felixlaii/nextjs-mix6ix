import { useEffect, useState } from "react";
import { VideoData } from "../../data/media";

const Media: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const [otherVideos, setOtherVideos] = useState(
    VideoData.filter((video) => video.id !== selectedVideo.id)
  );
  const [showMore, setShowMore] = useState(false);

  const handleVideoSelect = (video: (typeof VideoData)[number]) => {
    setSelectedVideo(video);
    setOtherVideos(VideoData.filter((v) => v.id !== video.id));
  };

  useEffect(() => {
    setSelectedVideo(VideoData[0]);
    setOtherVideos(VideoData.slice(1, 5)); // Initially show only four videos
  }, []);

  const handleShowMore = () => {
    setOtherVideos(VideoData.slice(1)); // Show all remaining videos
    setShowMore(true); // Set the flag to indicate that all videos are being shown
  };

  return (
    <div className="flex">
      <div className="mt-80 ml-40">
        <video
          className="aspect-w-25 aspect-h-30 border border-gray-200 rounded-lg dark:border-gray-700"
          controls
          preload="auto"
          src={selectedVideo.videoSrc}
        />
      </div>

      <ul className="mt-72 mr-40 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white">Other Videos</h1>

        {otherVideos.map((video) => (
          <li
            className="m-5"
            key={video.id}
            onClick={() => handleVideoSelect(video)}
          >
            <video
              className="w-64 h-48 border border-gray-200 rounded-lg dark:border-gray-700 object-cover object-top"
              src={video.videoSrc}
            />
          </li>
        ))}

        {!showMore && otherVideos.length > 0 && (
          <button
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </ul>
    </div>
  );
};

export default Media;
