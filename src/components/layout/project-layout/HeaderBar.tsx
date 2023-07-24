import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import {
  blur,
  translate,
  TranslateAnimation,
  opacity,
  background,
} from "../../Animation";
import Image from "next/image";
import { NavigationLink } from "@/types/component-types";
import React, { useState } from "react";
import { HeaderProps } from "../../../types/component-types";
import Logo from "../../Logo";

export interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: NavigationLink[];
  selectedLink: SelectedLinkState;
  setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLinkState>>;
}

interface ImageComponentProps {
  src: string;
  isActive: boolean;
}

const Body: React.FC<Pick<HeaderProps, "navigationLinks" | "onLinkClick">> = ({
  navigationLinks,
  onLinkClick,
}) => {
  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <div>
      {navigationLinks.map((link, index) => {
        const { name, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                // Here, you need to call the function from the props, not setSelectedLink
                onLinkClick({ isActive: true, index });
              }}
              onMouseLeave={() => {
                onLinkClick({ isActive: false, index });
              }}
              variants={blur}
              animate={
                // Replace the following with the appropriate logic for selectedLink
                // selectedLink.isActive && selectedLink.index !== index
                false ? "open" : "closed"
              }
            >
              {getChars(name)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

const ImageComponent: React.FC<
  Pick<ImageComponentProps, "src" | "isActive">
> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={`/images/${src}`}
          layout="fill"
          objectFit="cover"
          alt="image"
        />
      </div>
    </motion.div>
  );
};

const LogoLink: React.FC<
  Pick<HeaderProps, "onLinkClick" | "logo" | "alt"> & {
    logoClassName?: string;
    showSidePanel?: boolean;
  }
> = ({ onLinkClick, logo, alt, logoClassName }) => {
  const handleClick = () => {
    // Call the onLinkClick function only if it exists
    onLinkClick?.();
  };

  return (
    <div
    // className="hover:animate-tada"
    >
      <Link
        href="/"
        className={clsx(
          "flex lg:inline-block w- relative",
          "focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent",

          logoClassName
        )}
        onClick={handleClick}
      >
        <Logo />
      </Link>
    </div>
  );
};
const HeaderBar: React.FC<HeaderProps> = ({
  navigationLinks,
  companyName,
  companyNameClassName,
  logo,
  logoClassName,
  alt,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  return (
    <div>
      <div className="m-0">
        {logo ? (
          <LogoLink logo={logo} alt={alt} logoClassName={logoClassName} />
        ) : (
          <Link href="/">
            <div className={clsx(companyNameClassName, "")}>{companyName}</div>
          </Link>
        )}
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            {/* Use the Body and ImageComponent components here */}
            <Body
              navigationLinks={navigationLinks}
              onLinkClick={setSelectedLink}
            />
            <ImageComponent
              src={navigationLinks[selectedLink.index].src}
              isActive={selectedLink.isActive}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderBar;
