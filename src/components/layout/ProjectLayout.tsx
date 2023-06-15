import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import { Header } from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { SERVICES_DROPDOWN } from "../../../data/services";
import { NavigationLink } from "@/types/component-types";

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
      dropdown: SERVICES_DROPDOWN,
    },
    { name: "SHOP", href: "/shop" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
