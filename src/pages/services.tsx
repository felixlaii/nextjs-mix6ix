import Link from "next/link";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect } from "react";

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
      <div>
        <img src={img} />
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return <div></div>;
};

export default Services;
