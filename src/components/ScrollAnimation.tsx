import { useEffect, useRef } from "react";
import CanvasScrollClip from "canvas-scroll-clip";

const imageUrls = [
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157682/Scroll%20Animation/scroll-1_gvnv5f.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157680/Scroll%20Animation/scroll-2_ttvu52.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157682/Scroll%20Animation/scroll-3_w2gb5i.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688158743/Scroll%20Animation/scroll-4_ono6d4.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157691/Scroll%20Animation/scroll-5_w7wlva.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157697/Scroll%20Animation/scroll-6_s2zzzf.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157697/Scroll%20Animation/scroll-7_ahe7qx.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157702/Scroll%20Animation/scroll-8_b9zw3g.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688158747/Scroll%20Animation/scroll-9_yzspv5.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157690/Scroll%20Animation/scroll-10_rnjkow.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163925/Scroll%20Animation/scroll-11_ugsum5.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157702/Scroll%20Animation/scroll-12_gnna5v.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157689/Scroll%20Animation/scroll-13_mkhd9b.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157688/Scroll%20Animation/scroll-14_rtmh23.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688162889/Scroll%20Animation/scroll-15_nmlyjo.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157693/Scroll%20Animation/scroll-16_inpybk.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157695/Scroll%20Animation/scroll-17_koj51i.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157696/Scroll%20Animation/scroll-18_v2eqzd.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157703/Scroll%20Animation/scroll-19_fky2d1.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157703/Scroll%20Animation/scroll-20_jm3pcb.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157689/Scroll%20Animation/scroll-21_ohlg10.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157697/Scroll%20Animation/scroll-22_blrssc.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157701/Scroll%20Animation/scroll-23_wh6277.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688157701/Scroll%20Animation/scroll-24_lwtf3y.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163708/Scroll%20Animation/scroll-25_pcz7uu.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163712/Scroll%20Animation/scroll-26_pxtnr6.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163711/Scroll%20Animation/scroll-27_ebstyn.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163714/Scroll%20Animation/scroll-28_afaves.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163718/Scroll%20Animation/scroll-29_a5zmva.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163722/Scroll%20Animation/scroll-30_e1r1yf.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163719/Scroll%20Animation/scroll-31_ygmwro.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163722/Scroll%20Animation/scroll-32_wd25ao.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163732/Scroll%20Animation/scroll-33_vmosyi.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163709/Scroll%20Animation/scroll-34_jbd9td.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163737/Scroll%20Animation/scroll-35_qaq5kf.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163744/Scroll%20Animation/scroll-36_wj3fkm.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163713/Scroll%20Animation/scroll-37_sqihyr.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163710/Scroll%20Animation/scroll-38_wh4tet.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163712/Scroll%20Animation/scroll-39_fwvzwi.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163715/Scroll%20Animation/scroll-40_cdnkwx.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163723/Scroll%20Animation/scroll-41_vx8uvy.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163720/Scroll%20Animation/scroll-42_ultqxl.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163719/Scroll%20Animation/scroll-43_kbhatq.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163723/Scroll%20Animation/scroll-44_p48y2q.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163734/Scroll%20Animation/scroll-45_q9z6ws.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163737/Scroll%20Animation/scroll-46_ydvlwo.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163739/Scroll%20Animation/scroll-47_ebwn6f.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163746/Scroll%20Animation/scroll-48_mntx5g.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163725/Scroll%20Animation/scroll-49_wimdt4.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163727/Scroll%20Animation/scroll-50_cgs9ba.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163726/Scroll%20Animation/scroll-51_axvf5y.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163730/Scroll%20Animation/scroll-52_dzn1bl.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163731/Scroll%20Animation/scroll-53_aquhak.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163728/Scroll%20Animation/scroll-54_mipd7k.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163732/Scroll%20Animation/scroll-55_k67cbr.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163731/Scroll%20Animation/scroll-56_iy05jl.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163738/Scroll%20Animation/scroll-57_vuyrtf.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163738/Scroll%20Animation/scroll-58_z6kyns.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163741/Scroll%20Animation/scroll-59_uglomn.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163744/Scroll%20Animation/scroll-60_d9otyw.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163744/Scroll%20Animation/scroll-61_lc7muw.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163745/Scroll%20Animation/scroll-62_b6peia.png",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1688163747/Scroll%20Animation/scroll-63_hwpkrn.png",
];

const ScrollAnimation: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      new CanvasScrollClip(elementRef.current, {
        framePath: imageUrls[0], // Use the first frame as the framePath
        frameCount: imageUrls.length,
        scrollArea: 2000,
      });
    }
  }, []);

  return (
    <div className="h-screen" ref={elementRef}>
      {/* Map ScrollData to create img elements */}
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Scroll Animation Frame ${index}`}
          style={{ width: "100%", height: "auto", display: "none" }}
        />
      ))}
    </div>
  );
};

export default ScrollAnimation;
