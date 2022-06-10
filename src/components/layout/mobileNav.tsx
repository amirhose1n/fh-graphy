import Link from "next/link";
import BurgerMenu from "@components/burgerMenu";
import { useState } from "react";
import constants from "@constants/defaults";
import Image from "next/image";
import { useEffect, useRef } from "react";

const MobileNav = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setBurgerIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setBurgerIsActive]);

  const toggle = () => {
    setBurgerIsActive(!burgerIsActive);
  };

  return (
    <div className="w-full flex-col z-40" ref={ref}>
      <div
        className={`flex transition-all 
                duration-300 fixed 
                right-0 left-0 top-0 z-40 
                text-lg bg-gray-850 ${!burgerIsActive && "shadow-md"}`}
      >
        <div className="layout layout--center justify-between w-full flex items-center">
          <div
            className={
              "w-14 flex items-center justify-center rounded-full h-14 overflow-hidden"
            }
          >
            <Image
              width={120}
              height={170}
              alt="myself"
              src="/myself.webp"
              className="scale-110"
            />
          </div>
          <div onClick={toggle}>
            <BurgerMenu isActive={burgerIsActive} />
          </div>
        </div>
      </div>

      <ul
        className={`list-none text-center w-full 
          gap-y-3 pb-4 font-bold fixed duration-500
          bg-gray-850 right-0 left-0 transition-all ease-out shadow-md text-gray-100
         z-30 ${burgerIsActive ? "top-20" : "-top-20"}`}
      >
        {constants.SECTIONS.map((e) => {
          if (e.href === "download_pdf") {
            return (
              <a
                onClick={toggle}
                key={e.value}
                href="/resume.pdf"
                download
                className="font-bold text-gray-100 hover:text-gray-300 transition-all duration-200"
              >
                <li>{e.value}</li>
              </a>
            );
          }
          return (
            <Link href={"#" + e.href} key={e.value}>
              <a onClick={toggle}>
                <li>{e.value}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
