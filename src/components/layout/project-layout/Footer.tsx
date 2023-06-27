import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterProps } from "@/types/component-types";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { MIX6IX_DETAILS } from "../../../../data/mix6ix-info";
import {
  PiTiktokLogoLight,
  PiFacebookLogo,
  PiInstagramLogoLight,
} from "react-icons/pi";

const iconClassName = "mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-2 mb-1";
const socialIconClassName = "mt-3 mb-3 mr-4 w-7 h-7 text-brand-gold";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-[6.5rem]" src="/images/MIX6IX2022.png" alt="logo" />
      </div>
    </div>
  );
};

const FooterMenu: React.FC<Pick<FooterProps, "navigationLinks">> = ({
  navigationLinks,
}) => {
  return (
    <div className="flex flex-row h-full w-full pb-5">
      <div className="relative text-center">
        <ul className="flex flex-row mx-auto text-md gap-y-2 font-light text-zinc-400 mt-4">
          {navigationLinks.map((link) => (
            <li
              className="border border-zinc-300 rounded-full pr-5 pl-5 pt-2 pb-2 mx-5 font-primary text-[0.6em] tracking-widest"
              key={link.name}
            >
              <div className="hover:font-medium">
                <Link href={link.href}>{snakeCaseToTitleCase(link.name)}</Link>
              </div>
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
      <div className="flex flex-row mb-1">
        <div>
          <a href="https://www.instagram.com/mix.6ix/" target="_blank">
            {" "}
            <PiInstagramLogoLight className={socialIconClassName} />
          </a>
        </div>
        <div>
          <a
            href="https://www.tiktok.com/@mix.6ix?_t=8dTWCTllNv4&_r=1"
            target="_blank"
          >
            <PiTiktokLogoLight className={socialIconClassName} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/MIXX6IX" target="_blank">
            {" "}
            <PiFacebookLogo className={socialIconClassName} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Mix6ixContact = () => {
  return (
    <div>
      <div className="pb-1">
        <div className={divClassName}>
          <AiOutlinePhone className={iconClassName} />
          <a
            className="hover:underline font-primary text-[.7em] text-zinc-300 tracking-widest"
            href={`tel:${MIX6IX_DETAILS.phone}`}
          >
            {MIX6IX_DETAILS.phone}
          </a>
        </div>
        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="font-primary text-[.6em] hover:underline tracking-[.3em] text-zinc-300"
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
    <div className="h-full mt-48">
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:inline-block">
          <LogoFooter />
        </div>
        {/* <div className="flex flex-col justify-center w-1/2">
          <p className="font-primary text-xs text-white">
            Passionate hospitality professionals specializing in crafting
            memorable cocktail experiences. We offer exclusive, personalized
            services, embodying a culture of craftsmanship. From intimate
            gatherings to grand celebrations, we are the trusted bartending
            company in the Greater Toronto Area.
          </p>
        </div> */}
        <div>
          <Mix6ixContact />
        </div>
        <div>
          <Mix6ixSocials />
        </div>
        <div>
          <FooterMenu navigationLinks={navigationLinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
