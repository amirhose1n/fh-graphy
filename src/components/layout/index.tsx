import MobileNav from "./mobileNav";
import useIsMobile from "../../hooks/useIsMobile";
import Nav from "./nav";
import constants from "@constants/defaults";

export interface AuxProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AuxProps) => {
  const isMobile = useIsMobile();
  const aboutId = constants.SECTIONS[0].href;

  return (
    <div className="bg-gray-900 text-lg" id={aboutId}>
      {!isMobile ? <Nav /> : <MobileNav />}
      <div>{children}</div>
      <div>
        <footer className="layout layout--center text-gray-100 text-center desktop:text-md text-sm flex justify-center desktop:px-16 px-2 desktop:py-6 py-4 font-bold">
          © 2022 - AmirHossein Farhoodi
        </footer>
      </div>
    </div>
  );
};

export default Layout;
