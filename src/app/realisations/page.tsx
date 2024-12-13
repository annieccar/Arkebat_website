import projets from "../../projets.json";

import {
  ProjectCardDesktop,
  ProjectCardMobile,
} from "../components/ProjectCard";

const Realisations = () => {
  return (
    <div className="mt-28 w-full flex flex-col items-center">
      <h1 className="text-3xl mb-10">Nos réalisations</h1>
      <div className="w-5/6 xl:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center hidden lg:grid ">
        {projets?.map((projet, index) => {
          return (
            <ProjectCardDesktop index={index} projet={projet} key={index} />
          );
        })}
      </div>
      <div className="w-5/6 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center lg:hidden ">
        {projets?.map((projet, index) => {
          return <ProjectCardMobile index={index} projet={projet} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Realisations;
