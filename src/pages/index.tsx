import Hero from "@/components/Hero";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
