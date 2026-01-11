import {projectType} from "@/src/store/constantStoreType";
import {useEffect, useRef, useState} from "react";

interface ProjectCardProps {
  prj: projectType;
  selectedCardId: string | null;
  setSelectedCardId: (id: string | null) => void;
}

function ProjectCard({prj, selectedCardId, setSelectedCardId}: ProjectCardProps) {
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
      }, 500);
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
      onClick={() => handleCardClick(prj.id)}
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-500 flex flex-col
        h-[650px] min-w-[350px] hover:scale-105 select-none`}
    >
      {/* 이미지 */}
      <div className={`w-full bg-cyan-300 transition-all duration-300 ${isSelected ? "h-[20%]" : "h-[60%]"}`}></div>

      {/* 내용물 */}
      <div className="p-5 flex-grow overflow-hidden">
        {/* 제목 */}
        <h2 className="text-2xl font-bold mb-2">{prj.title}</h2>

        {/* 설명 */}
        <p className="text-[15px] text-gray-700 mb-4">{prj.description}</p>

        {/* 주요 기능 */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          }`}
        >
          {showContent && (
            <ul className="space-y-2 mb-4">
              {prj.keyFeatures.map((feature, idx) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium text-gray-800">{feature.point}:</span>
                  <span className="text-gray-600 ml-1">{feature.content}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 기술스택 */}
        <div
          className={`transition-all duration-500 ease-in-out delay-100 ${
            showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          }`}
        >
          {showContent && (
            <div className="flex flex-wrap gap-2">
              {prj.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 버튼 */}
      <div className="p-5 pt-0 mt-2">
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
  );
}

export default ProjectCard;
