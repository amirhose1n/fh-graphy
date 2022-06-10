import Link from "next/link";
import constants from "@constants/defaults";
import { useState, useEffect } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight > 40) {
        setNav(true);
        return;
      }
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgStyle = nav ? "bg-gray-850 shadow-md" : "bg-gray-900";

  return (
    <div
      className={`transition-all duration-300 fixed block right-0 left-0 top-0 z-40 ${bgStyle} `}
    >
      <ul
        className={`
        layout layout--center desktop:py-8 
        py-4 flex gap-8 
        flex justify-end w-full font-bold 
        desktop:text-xl text-md `}
      >
        {constants.SECTIONS.map((e) => {
          if (e.href === "download_pdf") {
            return (
              <a
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
              <a className="font-bold text-gray-100 hover:text-gray-300 transition-all duration-200">
                <li>{e.value}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
