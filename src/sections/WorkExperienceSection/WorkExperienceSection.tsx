import WorkExpCard from "@/src/components/WorkExpCard/WorkExpCard";
import WorkExpTimeline from "@/src/components/WorkExpTimeline/WorkExpTimeline";
import useAnimateWorkExpSection from "@/src/hooks/useAnimateWorkExpSection/useAnimateWorkExpSection";
import {MILESTONES} from "@/src/store/constantStore";
import {useState, useRef} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);
  const [animateTimeLine, setAnimateTimeLine] = useState<boolean>(false);
  const [animateWorkExpCard, setAnimateWorkExpCard] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const workExpSectionRef = useRef<HTMLDivElement>(null!);

  useAnimateWorkExpSection({
    animateTimeLine,
    setAnimateTimeLine,
    setSelectedMilestoneId,
    setAnimateWorkExpCard,
    sectionRef: workExpSectionRef,
  });

  const selectedMileStone = MILESTONES.find((milestone) => milestone.id === selectedMilestoneId) || MILESTONES[0];

  return (
    <section
      ref={workExpSectionRef}
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      bg-white flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto"
    >
      <div className="flex flex-col items-center flex-shrink-0 h-full">
        <div className="w-[75vw] sm:w-[65vw] xl:w-[80vw] mt-[12vh] sm:mt-[7vh] w-full flex ml-6 sm:ml-0">
          <h1
            className={`font-bold md:text-xl text-[14px] transition-all duration-600 ease-out
              ${animateTimeLine ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            Experience Overview
          </h1>
        </div>
        <WorkExpTimeline
          selectedMilestoneId={selectedMilestoneId}
          setSelectedMilestoneId={setSelectedMilestoneId}
          animateTimeLine={animateTimeLine}
          isTransitioning={isTransitioning}
        />

        <WorkExpCard
          selectedMileStone={selectedMileStone}
          animateWorkExpCard={animateWorkExpCard}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      </div>
    </section>
  );
}

export default WorkExperienceSection;
