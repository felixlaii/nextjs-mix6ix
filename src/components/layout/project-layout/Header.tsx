import React, { Fragment, useEffect, useRef, useState } from "react";
import { HeaderProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Button from "@/components/ui/inputs/Button";

export function useOnClickOutside<T extends HTMLDivElement>(
  ref: React.RefObject<T>,
  handler: (e: any) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/**
 * Header logo link pointing to the home ('/') route.
 */
const LogoLink: React.FC<
  Pick<HeaderProps, "onLinkClick" | "logo" | "alt"> & {
    logoClassName?: string;
    showSidePanel?: boolean;
  }
> = ({ onLinkClick, logoClassName }) => {
  return (
    <div className="hover:animate-spin">
      <Link
        href="/"
        className={clsx(
          "flex lg:inline-block w- relative",
          "focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent",

          logoClassName
        )}
        onClick={onLinkClick}
      ></Link>
    </div>
  );
};

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

/**
 * Header navigation links rendered as React `NavLink` siblings encapsulated within a fragment.
 *
 * Each individual link (anchor tag) has the given `linkClassName` applied as its className and the
 * optional `onLinkClick` set as its `onClick` handler.
 */
const MenuLinks: React.FC<
  Pick<
    HeaderProps,
    | "navigationLinks"
    | "currentActiveLocation"
    | "activeLinkClassName"
    | "linkClassName"
    | "hoverClassName"
    | "onLinkClick"
    | "textClassName"
  > & { onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  linkClassName,
  onLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul>
      {navigationLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={clsx(
              currentActiveLocation?.includes(link.href)
                ? activeLinkClassName
                : linkClassName,
              hoverClassName,
              textClassName,
              "text-center lg:text-left border-b-[1px] font-light py-[0.75rem]",
              "flex flex-col"
            )}
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DesktopNavBar: React.FC<
  Pick<
    HeaderProps,
    | "onLinkClick"
    | "navigationLinks"
    | "linkClassName"
    | "hoverClassName"
    | "arrowColor"
    | "dropdownBgColor"
    | "activeLinkClassName"
    | "currentActiveLocation"
    | "textClassName"
  >
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  arrowColor,
  dropdownBgColor,
  linkClassName,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [dropdownVariant, setDropdownVariant] = useState<string>("");
  const ref = useRef(null);
  const isShowing = isClick || isHover;
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <ul className="flex">
      {navigationLinks.map((link, i) => {
        return (
          <li key={link.name}>
            {!link.dropdown ? (
              <Link
                href={link.href}
                className={clsx(
                  currentActiveLocation?.includes(link.href)
                    ? activeLinkClassName
                    : linkClassName,
                  textClassName,
                  "text-center lg:text-left",
                  "flex flex-col"
                )}
                onClick={() => setIsClick(true)}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
              >
                <span className={clsx(hoverClassName)}>{link.name}</span>
              </Link>
            ) : (
              <Popover className="h-full">
                {({ close, open }: { close: () => void; open: boolean }) => (
                  <>
                    <div
                      className="relative h-full transition-all duration-300 ease-in-out"
                      ref={ref}
                      onMouseEnter={() => {
                        if (link.dropdown) {
                          setIsHover(true);
                          setDropdownVariant(link.name);
                        }
                      }}
                      onMouseLeave={() => {
                        setIsHover(false);
                      }}
                      onClick={() => setIsClick(true)}
                    >
                      <Popover.Button
                        className={clsx(textClassName, linkClassName)}
                      >
                        <Link className={hoverClassName} href={link.href}>
                          {link.name}

                          {link.dropdown && (
                            <ChevronUpIcon
                              className={clsx(
                                "ml-2 -mr-1 h-5 w-5 mt-1",
                                arrowColor,
                                isHover && dropdownVariant === link.name
                                  ? "rotate-0"
                                  : "rotate-180"
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </Popover.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      show={
                        link.name !== dropdownVariant ?? isClick
                          ? open
                          : isShowing
                      }
                      as={Fragment}
                    >
                      <Popover.Panel
                        className={clsx(
                          "absolute top-[4.75rem] mt-2 w-64 origin-top-right rounded-md bg-white shadow-md shadow-teal-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
                          dropdownBgColor
                        )}
                        ref={ref}
                        onMouseEnter={() => {
                          if (link.dropdown) {
                            setIsHover(true);
                            setDropdownVariant(link.name);
                          }
                        }}
                        onMouseLeave={() => {
                          setIsHover(false);
                          setDropdownVariant("");
                        }}
                        onClick={() => setIsClick(true)}
                      >
                        <div className="px-10 py-2">
                          <ul>
                            <>
                              {link.dropdown?.map((droplink) => (
                                <li
                                  key={droplink.name}
                                  className="first:mb-2 last:pb-0 border-b-2 border-zinc-100 last:border-none"
                                >
                                  <Link
                                    href={droplink.href}
                                    className={textClassName}
                                  >
                                    <span className={hoverClassName}>
                                      {droplink.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </>
                          </ul>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const Header: React.FC = () => {
  return <div></div>;
};
