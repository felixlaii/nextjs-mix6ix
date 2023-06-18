import Logo from "../../Logo";
import clsx from "clsx";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { FooterProps } from "@/types/component-types";
import { snakeCaseToTitleCase } from "@/lib/functions";
import Button from "@/components/ui/inputs/Button";

const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";

const LogoFooter = () => {
  return (
    <div className="h-full bg-brand-evenLighter flex justify-center w-full">
      <div className="relative my-auto">
        <Logo />
      </div>
    </div>
  );
};

const FooterHeading: React.FC<{ title: string; icon: any }> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex justify-center bg-white/20 w-full h-10">
      <div className="flex relative my-auto">
        <div>{icon}</div>
        <h2 className=" tracking-widest text-md text-white">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
};

const FooterMenu: React.FC<Pick<FooterProps, "navigationLinks">> = ({
  navigationLinks,
}) => {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-brand-lighter pb-5">
      <div className="relative text-center">
        <FooterHeading
          title="MENU"
          icon={<AiOutlineMenu className="mt-1 mr-2 w-4 h-4 text-white" />}
        />

        <ul className="flex flex-col mx-auto text-md gap-y-2 font-light text-white mt-4">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              {link.name !== "FORMS" ? (
                <div className="hover:font-medium">
                  <Link href={link.href}>
                    {snakeCaseToTitleCase(link.name)}
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col text-md gap-y-2">
                  {link.dropdown?.map((drop) => (
                    <li key={drop.name} className="hover:font-medium">
                      <Link href={drop.href}>
                        {snakeCaseToTitleCase(drop.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Mix6ixSocials = () => {
  return (
    <div>
      <FooterHeading
        title="SOCIALS"
        icon={<AiFillInstagram className={iconClassName} />}
      />
    </div>
  );
};
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-4 h-full mt-48">
      <div className="hidden md:inline-block">
        <LogoFooter />
      </div>
      <div className="hidden md:inline-block">
        {/* <FooterMenu navigationLinks={navigationLinks} /> */}
      </div>
    </div>
  );
};

export default Footer;
