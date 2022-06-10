import constants from "@constants/defaults";
import VsCodeContainer from "./vsCodeContainer";

const PersonalInfo = () => {
  const linesCount = constants.CODE_LINES;

  return (
    <div className="w-full border-b-2 border-gray-400">
      <div className="layout layout--center">
        <div className="w-full flex flex-col overflow-x-auto">
          <div className="h-11 w-full bg-gray-350">
            <button className="w-52 bg-gray-950  h-11 text-yellow-100 items-center flex justify-center gap-2">
              <span className="font-bold"> JS </span>{" "}
              <span className="text-white text-sm"> personalInfo.js </span>
            </button>
          </div>
          <VsCodeContainer>
            <div className="w-24 text-gray-250">
              <div className="py-12 pr-4 flex flex-col items-end">
                {linesCount > 0 &&
                  [...Array(linesCount)].map((_, key) => {
                    return <p key={key + 1}> {key + 1} </p>;
                  })}
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: constants.CODE }}
                className="w-full border-l border-gray-400 py-12 px-4 whitespace-pre"
              />
            </div>
          </VsCodeContainer>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
