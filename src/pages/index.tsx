import Hero from "@/components/Hero";
import ClientReviews from "@/components/ClientReviews";
import Link from "next/link";
import { motion, Transition } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

interface HomeProps {
  imageDetails: {
    width: number;
    height: number;
  };
  image: React.RefObject<HTMLDivElement>;
}
const transition: Transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const Home: React.FC<HomeProps> = ({ imageDetails, image }) => {
  return (
    <div className="relative">
      <Hero />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-primary text-center font-medium text-3xl xl:text-4xl mt-14 md:mt-24 tracking-widest text-zinc-400">
          Reviews
        </h1>
        <ClientReviews />
      </div>
    </div>
  );
};

export default Home;
