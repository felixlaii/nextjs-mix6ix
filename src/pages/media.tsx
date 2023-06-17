import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import VideoGrid from "@/components/VideoGrid";
import PageHeading from "@/components/ui/PageHeading";

export const media = [
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033460/mix_6ix_genesis_ho7bbz.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033457/221029-CDLM-Halloween-MIX6IX-Reel-002_h9ymij.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033455/mix_6ix_imperium_zt36ht.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033451/mix_6ix_be_yourself_mqovgg.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033450/221029-CDLM-Halloween-MIX6IX-Reel-003_tr604u.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033447/221029-CDLM-Halloween-MIX6IX-Reel-001_ewcheh.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033450/221029-CDLM-Halloween-MIX6IX-Reel-003_tr604u.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033447/221029-CDLM-Halloween-MIX6IX-Reel-001_ewcheh.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033442/221029-CDLM-Halloween-Reel-001_fpiiin.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033437/221029-CDLM-Halloween-Reel-002_xwak5a.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033416/export_1671484848077_qvzhmq.mov",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033411/mix_6ix_ghost_voices_ti1kez.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033378/57e51082-2301-4f1a-802a-2829dfa0926b_zaardi.mp4",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033353/Mix_6ix_Canada_Day_2_tptuep.mov",
  "https://res.cloudinary.com/dyjj9jfc2/video/upload/v1687033345/Mix_6ix_Canada_3LAU_yz6c28.mov",
];

const videoClassName =
  "h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg";

const Media: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [playingVideoRef, setPlayingVideoRef] =
    useState<HTMLVideoElement | null>(null);

  const videoRefs = Array.from({ length: media.length }, () =>
    useRef<HTMLVideoElement>(null)
  );
  const divRefs = Array.from({ length: media.length }, () =>
    useRef<HTMLDivElement>(null)
  );
  const scrollToVideo = (i: number) => {
    setCurrentVideo(i);
    videoRefs[i].current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalVideos = media.length;

  const nextVideo = () => {
    if (currentVideo >= totalVideos - 1) {
      scrollToVideo(0);
    } else {
      scrollToVideo(currentVideo + 1);
    }
  };

  const previousVideo = () => {
    if (currentVideo === 0) {
      scrollToVideo(totalVideos - 1);
    } else {
      scrollToVideo(currentVideo - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousVideo : nextVideo}
      className={`${arrowStyle} ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );

  useEffect(() => {
    // Pause the previous video when the currentVideo changes
    if (playingVideoRef) {
      playingVideoRef.pause();
      playingVideoRef.currentTime = 0;
    }
    setPlayingVideoRef(videoRefs[currentVideo]?.current);
  }, [currentVideo, videoRefs, playingVideoRef]);

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] mx-5 lg:mx-auto pb-8"
      )}
    >
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]">
        <PageHeading title="Video Gallery" />
      </div>
      <div className={clsx("relative mt-12", videoClassName)}>
        <div
          className={clsx(
            "flex overflow-x-hidden snap-mandatory snap-x",
            videoClassName
          )}
        >
          {sliderControl(true)}
          {media.map((media, i) => (
            <div
              className="w-full flex-shrink-0"
              key={`${media} - ${i}`}
              ref={divRefs[i]}
              id={i.toString()}
            >
              <video
                src={media}
                className={clsx("object-cover w-full h-full", videoClassName)}
                preload="auto"
                controls
                ref={videoRefs[i]}
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <VideoGrid />
      </div>
    </div>
  );
};

export default Media;
