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
      className="w-full h-screen
      bg-background flex sm:items-start items-center justify-center overflow-y-auto"
    >
      {/* 실제 내용물 */}
      <div
        className="flex flex-col items-center flex-shrink-0 h-full
        w-[75vw] sm:w-[65vw] xl:w-[80vw] 2xl:max-w-[1200px] max-w-[1200px]
        min-w-[350px] sm:min-w-[400px]
        "
      >
        <div className="mt-[12vh] sm:mt-[5vh] 2xl:mt-[8vh] w-full flex justify-start sm:justify-end">
          <h3
            className={`font-bold md:text-base text-[14px] tracking-[-0.02em] transition-all duration-600 ease-out
              ${animateTimeLine ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            Work Experience
          </h3>
        </div>
        <WorkExpTimeline selectedMilestoneId={selectedMilestoneId} setSelectedMilestoneId={setSelectedMilestoneId} />

        {/* 반응형 여백공간 */}
        <div className="block sm:hidden flex-grow min-h-0 max-h-8" />

        <WorkExpCard selectedMileStone={selectedMileStone} setSelectedMilestoneId={setSelectedMilestoneId} />
      </div>
    </section>
  );
}

export default WorkExperienceSection;
