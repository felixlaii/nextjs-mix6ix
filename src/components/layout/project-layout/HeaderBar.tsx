import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate, TranslateAnimation, opacity } from "../../Animation";
import Image from "next/image";

interface LinkData {
  title: string;
  href: string;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkData[];
  selectedLink: SelectedLinkState;
  setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLinkState>>;
}

const Body: React.FC<
  Pick<BodyProps, "links" | "selectedLink" | "setSelectedLink">
> = ({ links, selectedLink, setSelectedLink }) => {
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
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

// const Image: React.FC({ src, isActive }) {
//   return (
//     <motion.div
//       variants={opacity}
//       initial="initial"
//       animate={isActive ? "open" : "closed"}
//       className={styles.imageContainer}
//     >
//       <Image src={`/images/nav-images/${src}`} fill={true} alt="image" />
//     </motion.div>
//   );
// }
