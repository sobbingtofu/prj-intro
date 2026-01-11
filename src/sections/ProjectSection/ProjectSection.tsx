import {PROJECTS} from "@/src/store/constantStore";
import {useRef, useState} from "react";

function ProjectSection() {
  const projectSectionRef = useRef<HTMLElement>(null);

  const [animateProjectSectionTitle, setAnimateProjectSectionTitle] = useState<boolean>(true);

  const tempPrjs = [1, 2, 3];

  return (
    <section
      id="ProjectSection"
      ref={projectSectionRef}
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      bg-background flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto"
    >
      <div className="flex flex-col items-center flex-shrink-0 h-full">
        {/* 섹션 타이틀 */}
        <div className="w-[75vw] sm:w-[65vw] xl:w-[80vw] mt-[10vh]">
          <h1
            className={`font-bold md:text-xl text-[14px] transition-all duration-600 ease-out
              ${animateProjectSectionTitle ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            Projects
          </h1>
        </div>

        <div className="w-full grid md:grid-cols-3 mt-10 gap-x-10 min-h-[660px]">
          {PROJECTS.map((prj) => (
            <div key={prj.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-[60%] bg-cyan-300"></div>
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2">Project {prj.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
