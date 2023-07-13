// import React, { useEffect, useState } from "react";
// import {
//   motion,
//   useViewportScroll,
//   useTransform,
//   Variants,
// } from "framer-motion";
// import ScrollForMore from "@/components/ScrollForMore";

// // Ease
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// const companyFirstName: Variants = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.04,
//       staggerDirection: -1,
//     },
//   },
// };

// const companyLastName: Variants = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.04,
//       staggerDirection: 1,
//     },
//   },
// };

// const letter: Variants = {
//   initial: {
//     y: 400,
//   },
//   animate: {
//     y: 0,
//     transition: { ...transition, duration: 1 },
//   },
// };

// interface Mix6ixProps {
//   imageDetails: {
//     width: number;
//     height: number;
//   };
// }

// const Mix6ix: React.FC<Mix6ixProps> = ({ imageDetails }) => {
//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
//   const [canScroll, setCanScroll] = useState(false);

//   useEffect(() => {
//     if (canScroll === false) {
//       document.querySelector("body")!.classList.add("no-scroll");
//     } else {
//       document.querySelector("body")!.classList.remove("no-scroll");
//     }
//   }, [canScroll]);

//   return (
//     <motion.div
//       onAnimationComplete={() => setCanScroll(true)}
//       className="single"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//     >
//       <div className="container fluid">
//         <div className="row center top-row">
//           <div className="top">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 transition: { delay: 1.2, ...transition },
//               }}
//               className="details"
//             >
//               <div className="details">
//                 <span>28.538336</span>
//                 <span>-81.379234</span>
//               </div>
//               <div className="mua">MUA: @mylifeascrystall</div>
//             </motion.div>
//             <motion.div className="model">
//               <motion.span className="first" variants={companyFirstName}>
//                 <motion.span variants={letter}>M</motion.span>
//                 <motion.span variants={letter}>I</motion.span>
//                 <motion.span variants={letter}>X</motion.span>
//               </motion.span>
//               <motion.span className="last" variants={companyLastName}>
//                 <motion.span variants={letter}>6</motion.span>
//                 <motion.span variants={letter}>I</motion.span>
//                 <motion.span variants={letter}>X</motion.span>
//               </motion.span>
//             </motion.div>
//           </div>
//         </div>
//         <div className="row bottom-row">
//           <div className="bottom">
//             <motion.div className="image-container-single">
//               <motion.div
//                 initial={{
//                   y: "-50%",
//                   width: imageDetails.width,
//                   height: imageDetails.height,
//                 }}
//                 animate={{
//                   y: 0,
//                   width: "100%",
//                   height: window.innerWidth > 1440 ? 800 : 400,
//                   transition: { delay: 0.2, ...transition },
//                 }}
//                 className="thumbnail-single"
//               >
//                 <motion.div
//                   className="frame-single"
//                   whileHover="hover"
//                   transition={transition}
//                 >
//                   <motion.img
//                     src={require("../images/yasmeen.webp")}
//                     alt="an image"
//                     style={{ scale: scale }}
//                     initial={{ scale: 1.0 }}
//                     animate={{
//                       transition: { delay: 0.2, ...transition },
//                       y: window.innerWidth > 1440 ? -1200 : -600,
//                     }}
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//           <ScrollForMore />
//         </div>
//       </div>
//       <div className="detailed-information">
//         <div className="container">
//           <div className="row">
//             <div className="title">
//               <h2 className="title">
//                 The inspiration behind the artwork & <br /> what it means.
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Mix6ix;
