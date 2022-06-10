import ProgressBar from "@components/progressBar";
import constants from "@constants/defaults";

const Skills = () => {
  const skills = constants.SECTIONS[2];

  return (
    <div className="w-full border-b-2 border-gray-400 pb-12 relative">
      <div id={skills.href} className="-top-24 w-full none absolute" />
      <div className="layout layout--center">
        <h2 className="text-center text-gray-100 font-bold text-2xl">
          {skills.value}
        </h2>
        <div className="gap-x-8 gap-y-4 pt-12 desktop:grid-cols-2 grid-cols-1 grid ">
          {constants.SKILLS.Languages.map((e) => {
            return (
              <div key={e.value}>
                {" "}
                <h3 className="font-bold text-gray-100 mb-1">{e.value}</h3>
                <ProgressBar completed={e.level} />{" "}
              </div>
            );
          })}
          {constants.SKILLS.Core.map((e) => {
            return (
              <div key={e.value}>
                {" "}
                <h3 className="font-bold text-gray-100 mb-1">{e.value}</h3>
                <ProgressBar bgColor="bg-green-100" completed={e.level} />{" "}
              </div>
            );
          })}
        </div>
        <div className="rounded-3xl flex flex-col gap-4 border-2 border-gray-100 p-8 desktop:mt-12 mt-8">
          <div>
            <span className="text-purple-500 font-bold text-md">
              UI Libraries :
            </span>
            <p className="text-gray-100 text-sm">
              {constants.SKILLS.UI_LIBS.join(", ")}
            </p>
          </div>
          <div>
            <span className="text-purple-500 font-bold text-md">Testing :</span>
            <p className="text-gray-100 text-sm">
              {constants.SKILLS.Testing.join(", ")}
            </p>
          </div>
          <div>
            <span className="text-purple-500 font-bold text-md">Tooling :</span>
            <p className="text-gray-100 text-sm">
              {constants.SKILLS.Tooling.join(", ")}
            </p>
          </div>
          <div>
            <span className="text-purple-500 font-bold text-md">Network :</span>
            <p className="text-gray-100 text-sm">
              {constants.SKILLS.Network.join(", ")}
            </p>
          </div>
          <div>
            <span className="text-purple-500 font-bold text-md">More :</span>
            <p className="text-gray-100 text-sm">
              {constants.SKILLS.More.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
