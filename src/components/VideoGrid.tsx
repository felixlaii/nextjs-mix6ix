import { media } from "@/pages/media";
import { motion } from "framer-motion";

const VideoGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {media.map((media, i) => (
        <div
          className="h-auto max-w-full rounded-lg"
          key={`${media} - grid - ${i}`}
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={`#${i.toString()}`}>
              <video
                id={i.toString()}
                src={media}
                className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
                preload="auto"
                controls
              />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
