import constants from "@constants/defaults";
import Image from "next/image";
const Socials = () => {
  const socials = constants.SECTIONS[3];
  const socialItems = constants.SOCIALS;

  return (
    <div className="w-full border-b-2 border-gray-400 pb-12 relative">
      <div id={socials.href} className="-top-24 w-full none absolute" />
      <div className="layout layout--center">
        <h2 className="text-center text-gray-100 font-bold text-2xl">
          {socials.value}
        </h2>
        <div className="pt-12 grid desktop:grid-cols-4 gap-y-4 desktop:gap-y-0 grid-cols-2">
          {socialItems.map(({ title, href, img }) => {
            return (
              <div className="flex justify-center">
                <a
                  href={href}
                  target={"_blank"}
                  className="bg-gray-450 flex flex-col items-center rounded-xl p-6 shadow-md shadow-current w-32"
                >
                  <h3 className="text-gray-900 font-bold text-md mb-4">
                    {" "}
                    {title}{" "}
                  </h3>
                  <Image src={img} alt={title} width={60} height={60} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Socials;
