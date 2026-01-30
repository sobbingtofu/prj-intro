import WorkExpCard from "@/src/components/WorkExpCard/WorkExpCard";
import WorkExpTimeline from "@/src/components/WorkExpTimeline/WorkExpTimeline";
import useAnimateWorkExpSection from "@/src/hooks/useAnimateWorkExpSection/useAnimateWorkExpSection";
import {MILESTONES} from "@/src/store/constantStore";
import {workExpSectionRef} from "@/src/store/refStore";
import {useState} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);

  const {animateTimeLine} = useAnimateWorkExpSection({
    sectionRef: workExpSectionRef,
    setSelectedMilestoneId,
  });

  const selectedMileStone = MILESTONES.find((milestone) => milestone.id === selectedMilestoneId) || MILESTONES[0];

  return (
    <section
      ref={workExpSectionRef}
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      bg-background flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto"
    >
      <div className="flex flex-col items-center flex-shrink-0 h-full">
        <div className="w-[75vw] sm:w-[65vw] xl:w-[80vw] mt-[12vh] sm:mt-[5vh] 2xl:mt-[8vh] w-full flex ml-6 sm:ml-0">
          <h1
            className={`font-bold md:text-xl text-[14px] transition-all duration-600 ease-out
              ${animateTimeLine ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            Work Experience
          </h1>
        </div>
        <WorkExpTimeline selectedMilestoneId={selectedMilestoneId} setSelectedMilestoneId={setSelectedMilestoneId} />

        <WorkExpCard selectedMileStone={selectedMileStone} setSelectedMilestoneId={setSelectedMilestoneId} />
      </div>
    </section>
  );
}

export default WorkExperienceSection;
