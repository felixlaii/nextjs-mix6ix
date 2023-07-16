import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "../components/Animation";

export interface HeaderNavImageProps {
  src: string;
  isActive: boolean;
}

export default function HeaderNavImage({ src, isActive }: HeaderNavImageProps) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className="display-none"
    >
      <Image
        src={`/images/header-images/${src}`}
        width={300}
        height={300}
        alt="image"
        className="object-cover"
      />
    </motion.div>
  );
}
