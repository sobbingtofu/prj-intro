import {PROJECTS} from "@/src/store/constantStore";
import {useState, useRef, useEffect} from "react";
import Image from "next/image";

interface ProjectCardContainerProps {
  animatePrjSectionCards: boolean;
}

function ProjectCardContainer({animatePrjSectionCards}: ProjectCardContainerProps) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedCardId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (cardId: string) => {
    if (selectedCardId === cardId) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(cardId);
    }
  };

  return (
    <div ref={containerRef} className={`lg:hidden p-0 pb-8 my-4 w-full space-y-4`}>
      {PROJECTS.map((prj, index) => {
        const isSelected = selectedCardId === prj.id;
        const headerDelay = isSelected ? "0ms" : "500ms";
        const bodyDelay = isSelected ? "350ms" : "0ms";

        return (
          <div
            key={prj.id}
            className={`transition-all duration-500 ease-out
              ${animatePrjSectionCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: animatePrjSectionCards ? `${350 + index * 180}ms` : "0ms",
            }}
          >
            {/* 아코디언 */}
            <div
              onClick={() => handleCardClick(prj.id)}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer select-none"
            >
              {/* 접혀있을 때 보이는 부분 (헤더) */}
              <div
                className="flex items-center transition-all duration-500 ease-in-out"
                style={{
                  padding: isSelected ? "8px 12px" : "12px",
                }}
              >
                <div
                  className={`relative flex-shrink-0 rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out`}
                  style={{
                    width: isSelected ? "0px" : "64px",
                    height: isSelected ? "0px" : "64px",
                    opacity: isSelected ? 0 : 1,
                    marginRight: isSelected ? "0px" : "16px",
                    transform: isSelected ? "translateX(-20px)" : "translateX(0)",
                    transitionDelay: headerDelay,
                  }}
                >
                  <Image src={prj.imageSrc?.[0] || ""} alt={prj.title} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3
                    className="text-base font-bold mb-1 transition-all duration-500 ease-in-out"
                    style={{transitionDelay: headerDelay}}
                  >
                    {prj.title}
                  </h3>
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isSelected ? "0px" : "40px",
                      opacity: isSelected ? 0 : 1,
                      transform: isSelected ? "translateX(-20px)" : "translateX(0)",
                      transitionDelay: headerDelay,
                    }}
                  >
                    <p className="text-xs text-gray-600 line-clamp-2">{prj.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300
                      ${isSelected ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* 확장되는 내용 (바디) */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
                  ${isSelected ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{transitionDelay: bodyDelay}}
              >
                <div className="px-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
                  {/* 이미지 갤러리 */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={prj.imageSrc?.[0] || ""}
                      alt={prj.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 640px"
                    />
                  </div>

                  {/* 설명 */}
                  <p className="text-sm text-gray-700">{prj.description}</p>

                  {/* 주요 기능 */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">주요 기능</h4>
                    <div className="space-y-2 pl-2">
                      {prj.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium text-gray-800">{feature.point}:</span>
                          <span className="text-gray-600 ml-1">{feature.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 기술스택 */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {prj.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 버튼 */}
                  <div className="flex gap-3 pt-2">
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
                      className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 transition-colors text-center"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCardContainer;
