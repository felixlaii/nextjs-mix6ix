import Link from "next/link";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiFillInstagram,
} from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { FooterProps } from "@/types/component-types";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { MIX6IX_DETAILS } from "../../../../data/mix6ix-info";

const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-5 mb-1";
const socialIconClassName = "mt-5 mb-3 mr-2 w-7 h-7 text-white";

const LogoFooter = () => {
  return (
    <div className="h-full flex justify-center w-full">
      <div className="relative my-auto">
        <img className="h-[10rem]" src="/images/mix-shaker.png" alt="logo" />
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
        <h2 className="font-primary tracking-widest text-md text-white">
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
            <li className="font-primary text-xs" key={link.name}>
              {link.name ? (
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
        icon={<BiDrink className={iconClassName} />}
      />
      <div className="flex flex-col items-center">
        <div>
          <a href="https://www.instagram.com/mix.6ix/" target="_blank">
            {" "}
            <AiFillInstagram className={socialIconClassName} />
          </a>
          <a
            href="https://www.tiktok.com/@mix.6ix?_t=8dTWCTllNv4&_r=1"
            target="_blank"
          >
            <BsTiktok className={socialIconClassName} />
          </a>
          <a href="https://www.facebook.com/MIXX6IX" target="_blank">
            {" "}
            <BsFacebook className={socialIconClassName} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Mix6ixContact = () => {
  return (
    <div className="flex flex-col justify-between h-full border-t-8 md:border-none border-brand-lightest bg-brand-lighter md:bg-brand-darkest">
      <FooterHeading
        title="CONTACT"
        icon={<MdOutlineContactPhone className={iconClassName} />}
      />
      <div className="pb-8 pt-4 md:pt-0">
        <div className={divClassName}>
          <AiOutlinePhone className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href={`tel:${MIX6IX_DETAILS.phone}`}
          >
            {MIX6IX_DETAILS.phone}
          </a>
        </div>
        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="font-primary text-xs hover:underline text-white"
            href={`mailto:${MIX6IX_DETAILS.email}`}
          >
            {MIX6IX_DETAILS.email}
          </a>
        </div>
      </div>
    </div>
  );
};
const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-4 h-full mt-48">
      <div className="hidden md:inline-block">
        <LogoFooter />
      </div>
      <div className="hidden md:inline-block">
        <FooterMenu navigationLinks={navigationLinks} />
      </div>
      <div>
        <Mix6ixContact />
      </div>
      <div>
        <Mix6ixSocials />
      </div>
    </div>
  );
};

export default Footer;
