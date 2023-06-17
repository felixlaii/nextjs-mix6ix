import Hero from "@/components/Hero";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
