import {projectType} from "@/src/store/constantStoreType";
import {prjCardTextContainerRef} from "@/src/store/refStore";
import {useEffect, useRef, useState} from "react";

interface ProjectCardLgProps {
  prj: projectType;
  selectedCardId: string | null;
  setSelectedCardId: (id: string | null) => void;
  animatePrjSectionCardsLg: boolean;
  index: number;
}

function ProjectCardLg({prj, selectedCardId, setSelectedCardId, animatePrjSectionCardsLg, index}: ProjectCardLgProps) {
  const isSelected = selectedCardId === prj.id;

  const [showContent, setShowContent] = useState(false);

  const showContentDelayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (cardId: string) => {
    if (isSelected) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(cardId);
    }
  };

  useEffect(() => {
    if (isSelected) {
      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(true);
      }, 400);
      return () => clearTimeout(showContentDelayTimer.current!);
    } else {
      if (showContentDelayTimer.current) {
        clearTimeout(showContentDelayTimer.current);
      }

      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(false);
      }, 0);
    }
  }, [isSelected]);
  return (
    <div
      key={prj.id}
      className={`transition-all duration-500 ease-out
        2xl:flex-1 2xl:min-w-[385px] 2xl:max-w-[450px] 2xl:h-[610px]
        lg:flex-1 lg:min-w-[350px] lg:max-w-[400px] lg:h-[550px]
        ${animatePrjSectionCardsLg ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        transitionDelay: animatePrjSectionCardsLg ? `${350 + index * 180}ms` : "0ms",
      }}
    >
      <div
        onClick={() => handleCardClick(prj.id)}
        className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-out hover:scale-105 select-none flex flex-col"
      >
        {/* 이미지 */}
        <div
          className={`w-full bg-cyan-300 transition-all duration-300 ${
            isSelected ? "2xl:h-[23%] lg:h-[18%]" : "2xl:h-[62%] lg:h-[62%]"
          }`}
        ></div>

        {/* 내용물 */}
        <div className="2xl:p-5 lg:p-3 2xl:pb-2 lg:pb-0 overflow-hidden">
          {/* 제목 */}
          <h2 className="2xl:text-2xl lg:text-xl font-bold 2xl:mb-3 lg:mb-2">{prj.title}</h2>

          {/* 설명 */}
          <p className={`2xl:text-[15px] lg:text-sm text-gray-700  ${showContent ? "mb-3" : "mb-0"}`}>
            {prj.description}
          </p>

          {/* 주요 기능 */}
          <div
            className={`transition-all duration-500 ease-in-out 
            ${showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
          >
            {showContent && (
              <div
                ref={prjCardTextContainerRef}
                className="2xl:space-y-2.5 lg:space-y-2 overflow-y-auto
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white pr-2 mb-2
              2xl:h-[215px] lg:h-[227px] "
              >
                {prj.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="2xl:text-sm lg:text-[13px]">
                    <span className="font-medium text-gray-800">{feature.point}:</span>
                    <span className="text-gray-600 ml-1">{feature.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="2xl:p-5 md:p-3 2xl:pt-0 md:pt-0 mt-auto">
          {/* 기술스택 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {prj.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 2xl:text-[11px] lg:text-[10px] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`flex gap-3`}>
            <a
              href={prj.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors text-center"
            >
              GitHub
            </a>
            <a
              href={prj.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-gray-500 transition-colors text-center"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardLg;
