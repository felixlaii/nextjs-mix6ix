import { PropsWithChildren } from "react";
import { height } from "@/components/Animation";
import { motion } from "framer-motion";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div
          className="min-h-screen overflow-hidden overflow-x-hidden 
      bg-cover bg-center bg-[url('https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687550759/marek-piwnicki-yohdiGFAHrc-unsplash_msoypx.jpg')]
      "
        >
          {children}
        </div>
      </motion.div>
    </>
  );
};
