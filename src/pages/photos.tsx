import React from "react";
import Carousel from "../components/Carousel";
import Image from "next/image";
import PageHeading from "@/components/ui/PageHeading";

const images = [
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031905/drinks-image-01_vkxvvb.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031907/drinks-image-09_rtjuiq.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-04_smj88a.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-05_q1gcqz.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-02_imcrqe.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-03_hcoy45.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-08_in0xrw.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-06_kfqotc.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-07_zqmuc3.jpg",
];
const imageClassName = "h-[50rem] w-full object-contain";
const imagesItems = [
  <Image
    className={imageClassName}
    src={images[0]}
    alt="Image 1"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[1]}
    alt="Image 2"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[2]}
    alt="Image 3"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[3]}
    alt="Image 4"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[4]}
    alt="Image 5"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[5]}
    alt="Image 5"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[6]}
    alt="Image 5"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[7]}
    alt="Image 5"
    width={1100}
    height={900}
  />,
  <Image
    className={imageClassName}
    src={images[8]}
    alt="Image 5"
    width={1100}
    height={900}
  />,
];

const Photos = () => {
  return (
    <div className="mb-[20rem]">
      <div className="relative sm:pt-0 h-[12rem] md:h-[16rem]">
        <PageHeading title="Photo Gallery" />
      </div>
      <main className="mt-[5rem] flex flex-col items-center justify-center text-center">
        <Carousel items={imagesItems} />
      </main>
    </div>
  );
};

export default Photos;
