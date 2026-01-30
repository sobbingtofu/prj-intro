import useAnimateWorkExpSection from "@/src/hooks/useAnimateWorkExpSection/useAnimateWorkExpSection";
import {experienceMilestoneType} from "@/src/store/constantStoreType";
import {workExpSectionRef} from "@/src/store/refStore";
import {useState, useEffect, SetStateAction, Dispatch} from "react";

interface WorkExpCardProps {
  selectedMileStone: experienceMilestoneType;
  setSelectedMilestoneId: Dispatch<SetStateAction<number>>;
}

function WorkExpCard({selectedMileStone, setSelectedMilestoneId}: WorkExpCardProps) {
  const [displayMilestone, setDisplayMilestone] = useState(selectedMileStone);

  const {setIsTransitioning, isTransitioning, animateWorkExpCard} = useAnimateWorkExpSection({
    sectionRef: workExpSectionRef,
    setSelectedMilestoneId: setSelectedMilestoneId,
  });

  useEffect(() => {
    if (selectedMileStone.id !== displayMilestone.id) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setDisplayMilestone(selectedMileStone);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedMileStone, displayMilestone, setIsTransitioning]);

  return (
    <div
      className={`w-[85vw] sm:w-[65vw] xl:w-[80vw] min-w-[350px] sm:min-w-[400px]
        h-[470px] sm:min-h-[460px] sm:h-[60vh] 2xl:min-h-[520px] mb-3 
        px-4 py-4 sm:px-10 sm:py-6 xl:px-12 xl:py-8 2xl:px-12 2xl:py-10
        sm:mt-20 mt-[10vh] 2xl:mt-[10vh] transition-all duration-500 ease-in-out
        text-black bg-background rounded-2xl shadow-lg relative overflow-hidden sm:overflow-y-auto
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
        ${animateWorkExpCard ? "opacity-100" : "opacity-0"}
        `}
    >
      {/* 전환효과 적용되는 컨테이너 */}
      <div
        className={`w-full transition-all duration-300 ease-in-out 
          ${isTransitioning ? `opacity-0 -translate-x-8` : "opacity-100 translate-x-0"}
          flex flex-col justify-start items-start
        `}
      >
        {/* name, duration */}
        <div className="w-full flex justify-between sm:items-start items-center mb-1 2xl:mb-2">
          {displayMilestone.id !== 2 ? (
            <h1 className=" text-xl sm:text-3xl 2xl:text-4xl font-black">
              {displayMilestone.name.replace(/<br>/g, " ")}
            </h1>
          ) : (
            <h1 className="text-xl sm:text-3xl 2xl:text-4xl font-black">{"Nemo Partners SGC"}</h1>
          )}
          {displayMilestone.duration == "" ? null : (
            <div
              className="text-[10px] sm:text-[11px] 2xl:text-sm font-[500] bg-gray-200
              sm:px-4 sm:py-1 px-2 py-0.5 text-gray-700 rounded-[12px] whitespace-nowrap"
            >
              <p>{displayMilestone.duration.replace(/<br>/g, " ")}</p>
            </div>
          )}
        </div>

        {/* role */}
        <div className="hidden sm:block text-sm sm:text-base 2xl:text-lg font-semibold text-blue-600 mb-3 ">
          {displayMilestone.id == 4 ? "" : displayMilestone.role}
        </div>

        {/* keyword */}
        {displayMilestone.id == 4 ? null : (
          <div className="hidden sm:block text-xs sm:text-sm 2xl:text-base text-gray-700 leading-relaxed mb-4">
            {displayMilestone.keyword}
          </div>
        )}

        {/* summary */}
        {/* <div className="text-sm text-gray-600 mb-6 leading-relaxed">{displayMilestone.summary}</div> */}

        {/* Key Achievements */}
        {
          <div className="w-full mt-2 sm:mt-0">
            {/* <h3 className="text-base font-bold mb-3 text-gray-800">Key Achievements</h3> */}
            <div className="space-y-2 sm:space-y-3">
              {displayMilestone.keyAchievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-[13px] sm:text-sm 2xl:text-base font-semibold text-gray-800 mb-1">
                    • {achievement.point}
                  </div>
                  <div className="text-xs 2xl:text-sm text-gray-600 leading-relaxed pl-2 2xl:pl-3">
                    {achievement.description}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 leading-relaxed pl-2 2xl:pl-3">
                    {achievement.etc && (
                      <a className="underline italic" href={achievement.etc} target="_blank" rel="noopener noreferrer">
                        {achievement.etc}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }

        {/* Tech Stack */}
        {displayMilestone.techStack && displayMilestone.techStack.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-[13px] sm:text-sm font-bold mb-2 2xl:mb-3 text-gray-800">기술 스택</h3>
            <div className="flex flex-wrap sm:gap-2 gap-2">
              {displayMilestone.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] sm:text-xs bg-blue-100 text-blue-700 sm:px-3 px-2 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Core Skills */}
        {displayMilestone.coreSkills && displayMilestone.coreSkills.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-[13px] sm:text-sm font-bold mb-2 text-gray-800">핵심 역량</h3>
            <div className="flex flex-wrap sm:gap-2 gap-1">
              {displayMilestone.coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="text-[11px] sm:text-xs bg-green-100 text-green-700 sm:px-3 px-2 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkExpCard;
