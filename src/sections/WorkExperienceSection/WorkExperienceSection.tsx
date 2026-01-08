import WorkExpTimeline from "@/src/components/WorkExpTimeline/WorkExpTimeline";
import {useState} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);

  return (
    <section
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
    bg-white flex flex-col xl:justify-center sm:justify-start justify-center items-center overflow-y-auto"
    >
      <WorkExpTimeline selectedMilestoneId={selectedMilestoneId} setSelectedMilestoneId={setSelectedMilestoneId} />
    </section>
  );
}

export default WorkExperienceSection;
