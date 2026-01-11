import {MILESTONES} from "@/src/store/constantStore";

interface WorkExpTimelineProps {
  selectedMilestoneId: number;
  setSelectedMilestoneId: (id: number) => void;
  animateTimeLine?: boolean;
  isTransitioning: boolean;
}

function WorkExpTimeline({
  selectedMilestoneId,
  setSelectedMilestoneId,
  animateTimeLine,
  isTransitioning,
}: WorkExpTimelineProps) {
  const handleMilestoneClick = (milestoneId: number) => {
    if (!isTransitioning) {
      setSelectedMilestoneId(milestoneId);
    }
  };

  return (
    <>
      {/* Timeline Container */}
      <div className="w-[75vw] sm:w-[65vw] xl:w-[80vw] md:px-8 px-0 mt-[14vh] sm:mt-[12vh]">
        {/* Horizontal Line Wrapper */}
        <div className="relative w-full">
          {/* Horizontal Line 애니메이션용 */}
          <div
            className={`absolute w-full h-0.5 bg-prime-gray transition-transform duration-600 ease-out origin-right
              ${animateTimeLine ? "scale-x-100" : "scale-x-0"}`}
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
                    transitionDelay: animateTimeLine ? `${600 + (MILESTONES.length - 1 - index) * 200}ms` : "0ms",
                  }}
                >
                  {/* duration*/}
                  <div
                    className={`hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 text-center
                      lg:text-[12px] md:text-[11px] text-[9px] transition-colors duration-300
                      ${
                        selectedMilestoneId === milestone.id ? "text-black" : "text-gray-400 group-hover:text-gray-700"
                      }`}
                  >
                    <div className="sm:block hidden whitespace-nowrap">{milestone.duration.replace(/<br>/g, " ")}</div>
                    <div className="sm:hidden block">
                      {milestone.duration.split("<br>").map((text, index) => (
                        <div key={index} className="whitespace-nowrap">
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* 점 */}
                  <div
                    className={`w-1 h-1 rounded-full border-4 transition-all duration-300 
                      ${
                        selectedMilestoneId === milestone.id
                          ? "bg-blue-500 border-blue-600 scale-110"
                          : "bg-white border-gray-400 group-hover:border-blue-400"
                      }`}
                  />
                  {/* milestone name*/}
                  <div
                    className={`absolute pt-14 lg:pt-15 left-1/2 -translate-x-1/2 text-center font-bold
                      lg:text-[13px] md:text-[12px] text-[10px] transition-colors duration-300
                      ${
                        selectedMilestoneId === milestone.id ? "text-black" : "text-gray-400 group-hover:text-gray-700"
                      }`}
                  >
                    <div className="sm:block hidden">
                      {milestone.id !== 2 ? (
                        <div className="whitespace-nowrap">{milestone.name.replace(/<br>/g, " ")}</div>
                      ) : (
                        <>
                          {milestone.name.split("<br>").map((text, index) => (
                            <div key={index} className="whitespace-nowrap">
                              {text}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="sm:hidden block">
                      {milestone.name.split("<br>").map((text, index) => (
                        <div key={index} className="whitespace-nowrap">
                          {text}
                        </div>
                      ))}
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
