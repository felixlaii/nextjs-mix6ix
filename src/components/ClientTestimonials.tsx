import clsx from "clsx";
import { createRef, useState } from "react";
import { CLIENT_TESTIMONIALS } from "../../data/client-testimonials";

const slideClassName =
  "h-[32rem] md:h-80 xl:h-[20rem] max-w-3xl rounded-lg shadow-lg bg-white";

const ClientTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const refs = CLIENT_TESTIMONIALS.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});
  return <div></div>;
};

export default ClientTestimonials;
