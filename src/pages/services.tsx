import Link from "next/link";
import { useEffect, useState } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MIX_SERVICES } from "../../data/services";
import PageHeading from "@/components/ui/PageHeading";

export interface ServiceImageProps {
  img: string;
  name: string;
  service: string;
  description: string;
}

export interface ServiceLinkProps {
  service: string;
  description: string;
  img: string;
  id: string;
}
export interface ServiceLinkArr {
  links: ServiceLinkProps[];
}

const ServiceDiv = ({ img, name, service, description }: ServiceImageProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div>
      <div className="hidden xl:inline-flex">
        <img src={img} />
      </div>
      <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left md:mt-8 xl:my-auto">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800 text-shadow-lg shadow-zinc-300">
          {service}
        </h2>
        <p className="font-extralight text-md md:pb-8 xl:pb-24 xl:text-xl xl:w-[32rem] mx-auto text-zinc-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const ServiceLinks: React.FC<ServiceLinkArr> = ({ links }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const topImages = links.slice(0, 4); // Select the first 4 images
  const bottomImages = links.slice(4, 7); // Select the next 3 images

  return (
    <div className="flex md:flex-col md:flex-wrap md:justify-center md:items-center ml-[2rem] mr-[2rem]">
      <div className="flex flex-row justify-between w-full md:w-100">
        {/* Render the top 4 images */}
        {topImages.map((link, index) => (
          <div
            key={link.service}
            className="flex justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {hoveredIndex === index ? (
                <motion.p
                  className="ont-extralight text-xs w-[10rem] text-white description h-full flex justify-center text-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{link.description}</span>
                </motion.p>
              ) : (
                <>
                  <img
                    src={link.img}
                    alt={link.service}
                    className="rounded-full z-10 h-[20rem] w-[21rem] mx-auto object-center hover:img-hover mt-3"
                  />
                  <div className="text-white inset-0 ">
                    <p className="font-primary text-sm text-center xl:text-lg text-shadow-lg shadow-zinc-700">
                      {link.service}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between w-full md:w-100 overflow-hidden">
        {/* Render the bottom 3 images */}
        {bottomImages.map((link, index) => (
          <div
            key={link.service}
            className="flex justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12 relative"
            onMouseEnter={() => setHoveredIndex(index + 4)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <motion.div
              className="box "
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {hoveredIndex === index + 4 ? (
                <motion.p
                  className="font-extralight w-[10rem] text-xs text-white description h-full flex justify-center text-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex justify-center text-center items-center">
                    {link.description}
                  </span>
                </motion.p>
              ) : (
                <>
                  <img
                    src={link.img}
                    alt={link.service}
                    className="rounded-full z-10 h-[20rem] w-[21rem]  mx-auto object-center hover:img-hover mt-3"
                  />
                  <div className="text-white inset-0">
                    <p className="font-primary text-xs text-center xl:text-lg text-shadow-lg shadow-zinc-700">
                      {link.service}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <div className="relative pt-10 sm:pt-0 h-[12rem] md:h-[16rem]">
        <PageHeading title="Our Services" />
      </div>

      <div className="mb-12">
        <ServiceLinks links={MIX_SERVICES} />
      </div>
    </div>
  );
};

export default Services;
