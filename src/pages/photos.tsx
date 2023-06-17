import ImageGrid from "@/components/ImageGrid";
import clsx from "clsx";
import { createRef, useState } from "react";

export const images = [
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031907/drinks-image-09_rtjuiq.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031905/drinks-image-01_vkxvvb.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-04_smj88a.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-05_q1gcqz.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-02_imcrqe.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-03_hcoy45.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-08_in0xrw.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-06_kfqotc.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-07_zqmuc3.jpg",
];

const photoClassName =
  "h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg";

const Photos: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const refs = images.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] mx-5 lg:mx-auto pb-8"
      )}
    >
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]"></div>
      <div className={clsx("relative mt-12", photoClassName)}>
        <div
          className={clsx(
            "flex overflow-x-hidden snap-mandatory snap-x",
            photoClassName
          )}
        >
          {sliderControl(true)}
          {images.map((img, i) => (
            <div
              className="w-full flex-shrink-0"
              key={`${img} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <img
                src={img}
                className={clsx("object-cover w-full h-full", photoClassName)}
                alt="Our Practice"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <ImageGrid />
      </div>
    </div>
  );
};

export default Photos;
