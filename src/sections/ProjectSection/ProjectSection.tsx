import ProjectCardContainer from "@/src/components/ProjectCardContainer/ProjectCardContainer";
import {useRef, useState} from "react";

function ProjectSection() {
  const projectSectionRef = useRef<HTMLElement>(null);

  const [animateProjectSectionTitle, setAnimateProjectSectionTitle] = useState<boolean>(true);

  return (
    <section
      id="ProjectSection"
      ref={projectSectionRef}
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      bg-background flex flex-col xl:justify-start sm:justify-start justify-center items-center "
    >
      <div
        className="flex flex-col items-center flex-shrink-0 h-full
        w-[75vw] sm:w-[80vw] "
      >
        {/* 섹션 타이틀 */}
        <div className="mt-[10vh] w-full">
          <h1
            className={`font-bold text-xl transition-all duration-600 ease-out
              ${animateProjectSectionTitle ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {"Dev Projects"}
          </h1>
        </div>

        <ProjectCardContainer />
      </div>
    </section>
  );
}

export default ProjectSection;
