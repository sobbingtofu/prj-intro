import useAnimateWorkExpSection from "@/src/hooks/useAnimateWorkExpSection/useAnimateWorkExpSection";
import {MILESTONES} from "@/src/store/constantStore";
import {workExpSectionRef} from "@/src/store/refStore";
import {Dispatch, SetStateAction} from "react";
interface WorkExpTimelineProps {
  selectedMilestoneId: number;
  setSelectedMilestoneId: Dispatch<SetStateAction<number>>;
}

function WorkExpTimeline({selectedMilestoneId, setSelectedMilestoneId}: WorkExpTimelineProps) {
  const handleMilestoneClick = (milestoneId: number) => {
    if (!isTransitioning) {
      setSelectedMilestoneId(milestoneId);
    }
  };

  const {animateTimeLine, isTransitioning} = useAnimateWorkExpSection({
    sectionRef: workExpSectionRef,
    setSelectedMilestoneId,
  });

  return (
    <>
      {/* Timeline Container */}
      <div className="w-full mt-[35px] sm:mt-[65px]">
        {/* Horizontal Line Wrapper */}
        <div className="relative w-full">
          {/* Horizontal Line 애니메이션용 */}
          <div
            className={`absolute w-full h-0.5 bg-prime-gray transition-transform duration-500 ease-out origin-right
              ${animateTimeLine ? "scale-x-100" : "scale-x-0"}`}
            style={{
              transitionDelay: "400ms",
            }}
          />
          {/* Timeline Points*/}
          <div className="relative w-full h-0.5">
            <div className="absolute inset-0 flex justify-between items-center flex-row-reverse">
              {MILESTONES.map((milestone, index) => (
                <div
                  key={milestone.id}
                  onClick={() => handleMilestoneClick(milestone.id)}
                  className={`relative flex items-center cursor-pointer group transition-all duration-400
                    ${animateTimeLine ? "opacity-100 " : "opacity-0 "}`}
                  style={{
                    transitionDelay: animateTimeLine ? `${800 + (MILESTONES.length - 1 - index) * 250}ms` : "0ms",
                  }}
                >
                  {/* 점 */}
                  <div
                    className={`w-1 h-1 border-4 transition-all duration-300 rotate-45
                      ${
                        selectedMilestoneId === milestone.id
                          ? "bg-black border-black scale-110"
                          : "bg-white border-gray-400 group-hover:border-gray-700"
                      }`}
                  />
                  {/* milestone name*/}
                  <div
                    className={`absolute pt-14 lg:pt-15 transition-colors duration-300
                      ${selectedMilestoneId === milestone.id ? "text-black" : "text-gray-400 group-hover:text-gray-700"}
                      ${milestone.id === 4 ? "text-left" : milestone.id === 1 ? "-translate-x-7/8 text-right" : "-translate-x-1/2 text-center"}
                      `}
                  >
                    <div
                      className={`sm:block hidden whitespace-nowrap lg:text-[13px] md:text-[12px] text-[10px]
                        ${selectedMilestoneId === milestone.id ? "font-[500]" : "font-[400]"}
                        `}
                    >
                      {milestone.name}
                    </div>
                    <div
                      className={`sm:hidden block lg:text-[13px] md:text-[12px] text-[10px] w-[76px]
                        ${selectedMilestoneId === milestone.id ? "font-[500]" : "font-[400]"}
                        `}
                    >
                      {milestone.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExpTimeline;
