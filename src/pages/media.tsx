import { useEffect, useState, useRef } from "react";
import { VideoData } from "../../data/media";
import PageHeading from "@/components/ui/PageHeading";
import Modal from "@/components/ui/Modal";

const Media: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  );
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

  const selectVideoByIndex = (index: number) => {
    setCurrentVideoIndex(index);
    setIsVideoPlayerOpen(true);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative pt-10 sm:pt-0 h-[12rem] md:h-[16rem]">
        <PageHeading title="Video Gallery" />
      </div>
      <div className="flex">
        <div className="mt-[8rem] ml-40">
          <Modal
            open={isVideoPlayerOpen}
            onClose={() => setIsVideoPlayerOpen(false)}
          >
            {currentVideoIndex !== null && (
              <video
                className="h-[50rem] w-[100rem] bg-black"
                controls
                preload="auto"
                style={{ background: "black" }}
              >
                <source src={VideoData[currentVideoIndex].videoSrc} />
              </video>
            )}
          </Modal>
        </div>

        <div className="mt-[7rem] mr-40 w-full h-full flex flex-col items-center justify-center">
          <div className="overflow-none">
            <ul className="grid grid-cols-3 gap-4">
              {VideoData.map((video, index) => (
                <li
                  className="m-5 cursor-pointer"
                  key={video.id}
                  onClick={() => selectVideoByIndex(index)}
                >
                  <div className="w-64 h-48 object-cover object-top">
                    <img
                      src={video.thumbnail}
                      alt="video"
                      className="w-full h-full object-center object-cover rounded-md opacity-75 shadow-md shadow-zinc-300"
                    />
                  </div>
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
