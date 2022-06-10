import constants from "@constants/defaults";

const Info = () => {
  const expriences = constants.SECTIONS[1];

  return (
    <div className="w-full border-b-2 border-gray-400 pb-12 relative">
      <div id={expriences.href} className="-top-24 w-full none absolute" />
      <div className="layout layout--center">
        <h2 className="text-center text-gray-100 font-bold text-2xl">
          {expriences.value}
        </h2>
        <div className="flex flex-col whitespace-pre-wrap gap-10 pt-12">
          {constants.EXPERIENCES.map((e) => {
            return (
              <div key={e.title}>
                <div className="flex items-start justify-between desktop:flex-row flex-col">
                  {!e.link ? (
                    <p className="desktop:text-lg text-sm font-bold text-purple-500">
                      {e.title}
                    </p>
                  ) : (
                    <a target={"_blank"} href={e.link}>
                      <p className="desktop:text-lg transition-all duration-200 hover:text-purple-300 text-sm font-bold text-purple-500">
                        {e.title}
                      </p>
                    </a>
                  )}
                  <time className="text-sm text-purple-500 desktop:mt-0 mt-2">
                    {e.time}
                  </time>
                </div>
                <p className="text-gray-100 desktop:text-md text-sm mt-4">
                  {e.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Info;
