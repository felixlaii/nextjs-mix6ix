import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { GALLERY_DROPDOWN } from "../../../data/photo-data";
import { NavigationLink } from "@/types/component-types";
import logo from "../../../public/images/MIX6IX2022.png";
import clsx from "clsx";
import ScrollAnimation from "../ScrollAnimation";
/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = (
  { children },
  props
) => {
  const location = useRouter();
  const navigationLinks: Array<NavigationLink> = [
    { name: "ABOUT US", href: "/about-us" },
    {
      name: "SERVICES",
      href: "/services",
    },
    { name: "SHOP", href: "/shop" },
    { name: "GALLERY", href: "#", dropdown: GALLERY_DROPDOWN },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <Wrapper>
      <Header
        logo={logo.src}
        navigationLinks={navigationLinks}
        currentActiveLocation={location.pathname}
        textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-400"
        linkClassName="flex bg-left-bottom lg:text-md"
        logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 ml-2 mt-2 mr-1"
        hoverClassName={clsx(
          "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        )}
        activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
      />

      <Content>{children}</Content>
      <ScrollAnimation />
      <Footer navigationLinks={navigationLinks} />
    </Wrapper>
  );
};
