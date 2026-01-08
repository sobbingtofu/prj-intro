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

  const sectionRef = useRef<HTMLDivElement>(null!);

  useAnimateWorkExpSection({
    animateTimeLine,
    setAnimateTimeLine,
    setSelectedMilestoneId,
    setAnimateWorkExpCard,
    sectionRef,
  });

  const selectedMileStone = MILESTONES.find((milestone) => milestone.id === selectedMilestoneId) || MILESTONES[0];

  return (
    <section
      ref={sectionRef}
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
      bg-white flex flex-col xl:justify-start sm:justify-start justify-center items-center overflow-y-auto
      "
    >
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
    </section>
  );
}

export default WorkExperienceSection;
