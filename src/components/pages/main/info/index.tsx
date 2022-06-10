import Image from "next/image";
import useIsMobile from "@root/src/hooks/useIsMobile";
import costants from "@constants/defaults";
const Info = () => {
  const isMobile = useIsMobile();

  return (
    <div className="layout layout--center pt-24">
      <div className="justify-between flex desktop:flex-row flex-col items-center">
        <div className="flex flex-col justify-between">
          <span className="text-gray-100 desktop:text-4xl text-2xl font-bold">
            {" "}
            {"<>"}{" "}
          </span>
          <div className="py-4">
            <h1 className="text-gray-100 font-bold desktop:text-3xl text-2xl">
              Hi, I’m
              <br />
              <span className="ml-16 mt-2">Amirhossein Farhoodi</span>
            </h1>
            <p className="text-gray-300 desktop:whitespace-pre whitespace-pre-wrap pt-4 desktop:text-lg text-sm flex flex-wrap max-w-full">
              {costants.ABOUT_ME}
            </p>
          </div>
          <span className="text-gray-100 desktop:text-4xl text-2xl font-bold">
            {" "}
            {"</>"}{" "}
          </span>
        </div>
        {!isMobile && (
          <div>
            <Image
              className="rounded-xl"
              src="/myself.webp"
              alt="myself"
              width={275}
              height={410}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Info;
