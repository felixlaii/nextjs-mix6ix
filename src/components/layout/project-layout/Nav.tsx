import { motion } from "framer-motion";
import Link from "next/link";
// import styles from "./style.module.scss";
import { blur, translate } from "../../Animation";
import { HeaderProps } from "@/types/component-types";
import { useState } from "react";

interface BodyProps
  extends Pick<HeaderProps, "navigationLinks" | "currentActiveLocation"> {}

function HeaderNav({ navigationLinks, currentActiveLocation }: BodyProps) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

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
      {navigationLinks.map((link, i) => {
        const { name, href } = link;
        return (
          <Link key={`l_${i}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index: i });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index: i });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== i
                  ? "open"
                  : "closed"
              }
            >
              {getChars(name)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
export default HeaderNav;
