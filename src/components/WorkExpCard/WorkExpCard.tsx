import useAnimateWorkExpSection from "@/src/hooks/useAnimateWorkExpSection/useAnimateWorkExpSection";
import {experienceMilestoneType} from "@/src/store/constantStoreType";
import {mileStoneCardContentDetailContainerRefs, workExpSectionRef} from "@/src/store/refStore";
import {useState, useEffect, SetStateAction, Dispatch} from "react";
import OpenCloseIcon from "@/src/components/OpenCloseIcon/OpenCloseIcon";

interface WorkExpCardProps {
  selectedMileStone: experienceMilestoneType;
  setSelectedMilestoneId: Dispatch<SetStateAction<number>>;
}

function WorkExpCard({selectedMileStone, setSelectedMilestoneId}: WorkExpCardProps) {
  const [displayMilestone, setDisplayMilestone] = useState(selectedMileStone);
  const [openProjectIndex, setOpenProjectIndex] = useState<number[]>([]);

  const {setIsTransitioning, isTransitioning, animateWorkExpCard} = useAnimateWorkExpSection({
    sectionRef: workExpSectionRef,
    setSelectedMilestoneId: setSelectedMilestoneId,
  });

  useEffect(() => {
    if (selectedMileStone.id !== displayMilestone.id) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setOpenProjectIndex([]);
        setDisplayMilestone(selectedMileStone);
        setIsTransitioning(false);
      }, 300);

      return () => {
        clearTimeout(timer);
        setOpenProjectIndex([]);
      };
    }
  }, [selectedMileStone, displayMilestone, setIsTransitioning]);

  return (
    <div
      className={`w-full mt-[55px] sm:mt-[75px]
        text-black relative overflow-hidden pb-10
        transition-all duration-500 ease-in-out max-h-[650px] min-h-[460px]
        ${animateWorkExpCard ? "opacity-100" : "opacity-0"}`}
    >
      {/* 전환효과 적용되는 컨테이너 */}
      <div
        className={`w-full h-full transition-all duration-300 ease-in-out 
          ${isTransitioning ? `opacity-0 -translate-x-8` : "opacity-100 translate-x-0"}
          flex flex-col justify-start items-start 
        `}
      >
        {/* name, duration */}
        <div className="w-full flex justify-start sm:items-baseline items-center gap-x-6">
          <h1 className="text-xl sm:text-3xl xl:text-5xl font-black tracking-tight">{displayMilestone.name}</h1>
          <div className="text-[10px] sm:text-[11px] 2xl:text-sm font-[500] text-gray-700 whitespace-nowrap">
            <p>{displayMilestone.duration.replace(/<br>/g, " ")}</p>
          </div>
        </div>

        {/* role */}
        <div className="hidden sm:block text-sm sm:text-base  font-semibold text-greengray mt-3">
          {displayMilestone.role}
        </div>
        {displayMilestone.id === 1 ? (
          // (주)스마트팩토리 전용 레이아웃
          <>
            {/* Detailed Contents */}
            <div
              className="w-full mt-2 space-y-2 h-[420px] overflow-y-auto pr-2
              scrollbar-thin02"
              style={{scrollbarGutter: "stable"}}
            >
              {displayMilestone.detailedContents?.map((project, index) => (
                <div key={index} ref={mileStoneCardContentDetailContainerRefs[index]}>
                  {/* Project Header */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base 2xl:text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-[12px] sm:text-xs 2xl:text-sm text-gray-600 leading-relaxed tracking-tight font-[400] sm:font-[500]">
                      {project.overview}
                    </p>
                  </div>
                  {/* 업무 및 성과 */}
                  <div
                    className={`flex flex-col pt-3  px-4 bg-[#E5E5E5] mt-2 relative
                      ${!openProjectIndex.includes(index) ? "cursor-pointer" : ""}
                      ${openProjectIndex.includes(index) ? "pb-12 sm:pb-2" : "pb-2"}
                    `}
                    onClick={() => {
                      if (!openProjectIndex.includes(index)) {
                        setOpenProjectIndex((prev) => [...prev, index]);
                      }
                    }}
                  >
                    <h4 className="hidden sm:block text-xs sm:text-sm font-bold text-gray-700 tracking-tight mb-1">
                      담당 업무 및 성과
                    </h4>

                    <div className="px-2 sm:mt-0 mt-0 relative">
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                          openProjectIndex.includes(index) ? "max-h-[2000px] opacity-100" : "max-h-[80px] opacity-60"
                        }`}
                      >
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex}>
                            <div className="text-[12px] sm:text-[13px] 2xl:text-sm font-[400] text-gray-800 mb-1">
                              {achievement.point}
                            </div>
                            {achievement.description.map((desc, descIndex) => (
                              <div
                                key={descIndex}
                                className="text-xs text-gray-600 leading-relaxed pl-2 2xl:pl-3 tracking-tight font-[400]"
                              >
                                • {desc}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      {/* 그라디언트 오버레이 */}
                      {!openProjectIndex.includes(index) && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#E5E5E5] via-[#E5E5E5]/70 to-transparent pointer-events-none" />
                      )}
                    </div>

                    {/* OpenCloseIcon - 우측 하단 */}
                    {
                      <div
                        className="absolute bottom-2 right-2 p-2 cursor-pointer hover:bg-gray-300/50 rounded-full transition-colors duration-200 z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenProjectIndex((prev) =>
                            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
                          );
                        }}
                      >
                        <OpenCloseIcon isSelected={openProjectIndex.includes(index)} />
                      </div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : displayMilestone.id === 2 ? (
          // Nemo Partners SCG 전용 레이아웃
          <>
            {/* Overview */}
            {displayMilestone.overview && (
              <div className="w-full mt-2">
                <p className="text-xs 2xl:text-sm text-black font-[400] leading-relaxed">{displayMilestone.overview}</p>
              </div>
            )}

            {/* 주요 프로젝트 및 업무 */}
            {displayMilestone.projects && displayMilestone.projects.length > 0 && (
              <div className="w-full mt-4">
                <h3 className="text-[13px] sm:text-sm font-bold mb-1 text-gray-800">주요 프로젝트 및 업무</h3>
                <div className="space-y-1">
                  {displayMilestone.projects.map((project, index) => (
                    <div key={index} className="text-xs 2xl:text-sm text-gray-600 leading-relaxed">
                      • {project}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 개발자/프로덕트 엔지니어와의 연결고리 */}
            {displayMilestone.connections && displayMilestone.connections.length > 0 && (
              <div className="w-full mt-4">
                <h3 className="text-[13px] sm:text-sm font-bold mb-1 text-gray-800">개발자 역량과의 연결고리</h3>
                <div className="space-y-1">
                  {displayMilestone.connections.map((connection, index) => (
                    <div key={index} className="text-xs 2xl:text-sm text-gray-600 leading-relaxed">
                      • {connection}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // 미래에셋VC, 교육 및 경험 용 레이아웃
          <>
            {/* keyword */}
            {displayMilestone.id == 4 ? null : (
              <div className="hidden sm:block text-xs sm:text-sm 2xl:text-base text-gray-700 leading-relaxed mb-4">
                {displayMilestone.keyword}
              </div>
            )}
            {/* Key Achievements */}
            {
              <div className="w-full mt-4">
                {/* <h3 className="text-base font-bold mb-3 text-gray-800">Key Achievements</h3> */}
                <div className="space-y-2 sm:space-y-3">
                  {displayMilestone.keyAchievements?.map((achievement, index) => (
                    <div key={index}>
                      <div className="text-[13px] sm:text-sm 2xl:text-base font-semibold text-gray-800 mb-1">
                        • {achievement.point}
                      </div>
                      <div className="text-xs 2xl:text-sm text-gray-600 leading-relaxed pl-2 2xl:pl-3">
                        {achievement.description}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 leading-relaxed pl-2 2xl:pl-3">
                        {achievement.etc && (
                          <a
                            className="underline italic"
                            href={achievement.etc}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {achievement.etc}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          </>
        )}
        {/* Tech Stack */}
        {displayMilestone.techStack && displayMilestone.techStack.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-[13px] sm:text-sm font-bold mb-2 2xl:mb-3 text-gray-800">기술 스택</h3>
            <div className="flex flex-wrap sm:gap-2 gap-2">
              {displayMilestone.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] sm:text-xs bg-greengray/15 text-emerald-900 sm:px-3 px-2 py-1 rounded-full font-medium"
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
                  className="text-[11px] sm:text-xs bg-greengray/15 text-emerald-900 sm:px-3 px-2 py-1 rounded-xl font-medium"
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
