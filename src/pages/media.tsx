import { useEffect, useState } from "react";
import { VideoData } from "../../data/media";
import PageHeading from "@/components/ui/PageHeading";

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
      <div className="relative pt-10 sm:pt-0 h-[12rem] md:h-[16rem]">
        <PageHeading title="Video Gallery" />
      </div>
      <div className="flex">
        <div className=" mt-[8rem] ml-40">
          <video
            className="h-[50rem] w-[100rem] border border-gray-700 dark:border-gray-700"
            controls
            preload="auto"
            src={selectedVideo.videoSrc}
          />
        </div>

        <div className="mt-[8rem] mr-40 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-lg text-shadow-lg shadow-zinc-300">
            Other Videos
          </h1>

          <div className="overflow-y-auto">
            <ul className="w-80 h-[48rem]">
              {otherVideos.map((video) => (
                <li
                  className="m-5"
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                >
                  <video
                    className="w-64 h-48 border border-gray-700  dark:border-gray-700 object-cover object-top"
                    src={video.videoSrc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
