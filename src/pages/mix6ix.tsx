import React, { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  Variants,
} from "framer-motion";
import ScrollForMore from "@/components/ScrollForMore";

// Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const companyFirstName: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const companyLastName: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter: Variants = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

interface Mix6ixProps {
  imageDetails: {
    width: number;
    height: number;
  };
}

const Mix6ix: React.FC<Mix6ixProps> = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body")!.classList.add("no-scroll");
    } else {
      document.querySelector("body")!.classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container fluid"></div>
    </motion.div>
  );
};

export default Mix6ix;
