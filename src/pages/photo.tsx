import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const photoGallery = [
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

const Photo: React.FC = () => {
  return (
    <div className="mt-[20rem] w-1/2">
      <motion.div className="border overflow-hidden cursor-grab">
        <motion.div drag="x" className="flex">
          {photoGallery.map((photo) => {
            return (
              <motion.div className="min-h-[10rem] min-w-[30rem]  rounded-full">
                <img
                  className="object-cover opacity-80 h-[10rem] md:h-[15rem] xl:h-[20rem] pointer-events-none"
                  src={photo}
                  alt="photo-gallery"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
