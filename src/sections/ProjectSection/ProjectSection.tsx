import ProjectAccordianContainer from "@/src/components/ProjectCardContainer/ProjectAccordianContainer";
import ProjectCardFlexContainer from "@/src/components/ProjectCardContainer/ProjectCardFlexContainer";
import useAnimatePrjSection from "@/src/hooks/useAnimatePrjSection/useAnimatePrjSection";
import {useRef, useState} from "react";

function ProjectSection() {
  const projectSectionRef = useRef<HTMLDivElement>(null!);

  const [animatePrjSectionTitle, setAnimatePrjSectionTitle] = useState<boolean>(false);
  const [animatePrjSectionCardsLg, setAnimatePrjSectionCardsLg] = useState<boolean>(false);

  useAnimatePrjSection({
    animatePrjSectionTitle,
    setAnimatePrjSectionTitle,
    sectionRef: projectSectionRef,
    setAnimatePrjSectionCardsLg,
  });

  return (
    <section
      id="ProjectSection"
      ref={projectSectionRef}
      className="w-full h-screen
      bg-background flex sm:items-start items-center justify-center overflow-y-auto scrollbar-thin03"
    >
      {/* 실제 내용물 */}
      <div
        className="flex flex-col items-center flex-shrink-0 h-full
        w-[75vw] sm:w-[80vw] xl:w-[80vw] 2xl:max-w-[1400px] max-w-[1200px]
        min-w-[350px] sm:min-w-[400px]
       "
      >
        {/* 섹션 타이틀 */}
        <div
          className="w-[75vw] sm:w-[65vw] xl:w-[80vw] 2xl:max-w-[1200px] max-w-[1200px]
        mt-[12vh] sm:mt-[5vh] 2xl:mt-[8vh] flex justify-start sm:justify-end"
        >
          <h3
            className={`font-bold md:text-base text-[14px] tracking-[-0.02em] transition-all duration-600 ease-out
              ${animatePrjSectionTitle ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {"Dev Projects"}
          </h3>
        </div>

        {/* lg 이상 */}
        <ProjectCardFlexContainer animatePrjSectionCardsLg={animatePrjSectionCardsLg} />
        {/* lg 이하 */}
        <ProjectAccordianContainer animatePrjSectionCards={animatePrjSectionCardsLg} />
      </div>
    </section>
  );
}

export default ProjectSection;
