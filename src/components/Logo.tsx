import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import "animate.css/animate.min.css";

const LogoAnimation = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <div>
      {isFadeIn ? (
        <Transition
          show={isFadeIn}
          enter="transition transform duration-1000"
          enterFrom="opacity-0 translate-x-[-50%]"
          enterTo="opacity-100 translate-x-0"
        >
          <Image
            src="/images/MIX6IX2022.png"
            alt="logo"
            width={150}
            height={150}
            className={`animate__animated animate__tada opacity-1`}
          />
        </Transition>
      ) : null}
    </div>
  );
};

export default LogoAnimation;
