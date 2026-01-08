import {experienceMilestoneType} from "@/src/store/constantStoreType";
import {useState, useEffect} from "react";

interface WorkExpCardProps {
  selectedMileStone: experienceMilestoneType;
  animateWorkExpCard: boolean;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
}

function WorkExpCard({selectedMileStone, animateWorkExpCard, isTransitioning, setIsTransitioning}: WorkExpCardProps) {
  const [displayMilestone, setDisplayMilestone] = useState(selectedMileStone);

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
      className={`w-[65vw] min-w-[400px] max-w-[1000px]
        h-[470px]
        mt-20 mb-12 transition-all duration-500
        text-black bg-background px-10 py-8 rounded-2xl shadow-lg relative overflow-hidden
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
        <div className="w-full flex justify-between items-baseline mb-1">
          <h1 className="text-3xl font-black">{displayMilestone.name.replace(/<br>/g, " ")}</h1>
          <div className="text-[11px] bg-gray-200 px-4 py-1 text-gray-700 rounded-[12px] whitespace-nowrap">
            <p>{displayMilestone.duration.replace(/<br>/g, " ")}</p>
          </div>
        </div>

        {/* role */}
        <div className="text-base font-semibold text-blue-600 mb-3">{displayMilestone.role}</div>

        {/* keyword */}
        <div className="text-sm text-gray-700 mb-4 leading-relaxed">{displayMilestone.keyword}</div>

        {/* summary */}
        {/* <div className="text-sm text-gray-600 mb-6 leading-relaxed">{displayMilestone.summary}</div> */}

        {/* Key Achievements */}
        <div className="w-full mb-2">
          {/* <h3 className="text-base font-bold mb-3 text-gray-800">Key Achievements</h3> */}
          <div className="space-y-3">
            {displayMilestone.keyAchievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-sm font-semibold text-gray-800 mb-1">• {achievement.point}</div>
                <div className="text-xs text-gray-600 leading-relaxed pl-4">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        {displayMilestone.techStack && displayMilestone.techStack.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-sm font-bold mb-2 text-gray-800">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {displayMilestone.techStack.map((tech, index) => (
                <span key={index} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Core Skills */}
        {displayMilestone.coreSkills && displayMilestone.coreSkills.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-sm font-bold mb-2 text-gray-800">핵심 역량</h3>
            <div className="flex flex-wrap gap-2">
              {displayMilestone.coreSkills.map((skill, index) => (
                <span key={index} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
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
