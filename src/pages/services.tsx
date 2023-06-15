import Link from "next/link";
import { useEffect, useState } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MIX_SERVICES } from "../../data/services";

export interface ServiceImageProps {
  img: string;
  name: string;
  service: string;
  description: string;
}

export interface ServiceLinkProps {
  service: string;
  description: string;
  href: string;
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
  return (
    <ul className="flex flex-wrap md:px-12 overflow-y-hidden xl:w-screen md:justify-center xl:gap-12 relative z-10">
      {links.map((link, index) => (
        <li
          key={link.service}
          className="flex w-1/2 md:w-1/5 justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12 mx-auto md:mx-0 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <motion.div
            className="box relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {hoveredIndex === index ? (
              <motion.p
                className="font-extralight text-sm text-center py-4 xl:text-lg description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {link.description}
              </motion.p>
            ) : (
              <>
                <div className="text-white absolute inset-0 flex items-center justify-center">
                  <p className="font-bold text-xl text-center py-4 xl:text-lg">
                    {link.service}
                  </p>
                </div>
                <Link href={link.href}>
                  <img
                    src={link.img}
                    alt={link.service}
                    className="z-10 h-41 w-41 mx-auto object-cover hover:img-hover mt-3 aspect-w-1 aspect-h-1"
                  />
                </Link>
              </>
            )}
          </motion.div>
        </li>
      ))}
    </ul>
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
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10 animate-fadeInFast transition">
      <h1 className="text-center pt-24 sm:pt-0 my-12 font-semibold text-2xl xl:text-3xl text-shadow-lg shadow-zinc-300">
        Services
      </h1>
      <p className="font-extralight text-center mb-12 xl:max-w-xl xl:mx-auto xl:text-xl">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>
      <div className="mb-12">
        <ServiceLinks links={MIX_SERVICES} />
      </div>
      {/* <div className="mt-24">
        <ServiceList links={MIX_SERVICES} />
      </div> */}
    </div>
  );
};

export default Services;
