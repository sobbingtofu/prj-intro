import {PROJECTS} from "@/src/store/constantStore";
import {useState, useRef, useEffect} from "react";
import ProjectCardLg from "../ProjectCard/ProjectCardLg";

interface ProjectCardContainerLgProps {
  animatePrjSectionCardsLg: boolean;
}

function ProjectCardContainerLg({animatePrjSectionCardsLg}: ProjectCardContainerLgProps) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [overflowY, setOverflowY] = useState<string>("hidden");

  const overflowYDelayTimer = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (animatePrjSectionCardsLg) {
      overflowYDelayTimer.current = setTimeout(() => {
        setOverflowY("auto");
      }, 800);
    } else {
      if (overflowYDelayTimer.current) {
        clearTimeout(overflowYDelayTimer.current);
        overflowYDelayTimer.current = null;
      }
      overflowYDelayTimer.current = setTimeout(() => {
        setOverflowY("hidden");
      }, 0);
    }

    return () => {
      if (overflowYDelayTimer.current) {
        clearTimeout(overflowYDelayTimer.current);
        overflowYDelayTimer.current = null;
      }
    };
  }, [animatePrjSectionCardsLg]);

  return (
    <>
      {/* 1024 이상(lg 이상)에서만 보이는 애들 */}
      <div
        ref={containerRef}
        className={`hidden lg:block p-4 my-4
        w-full overflow-x-auto overflow-y-${overflowY} 
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
      >
        <div ref={containerRef} className="flex flex-row justify-between w-auto gap-[2%]">
          {PROJECTS.map((prj, index) => {
            return (
              <ProjectCardLg
                key={prj.id}
                prj={prj}
                selectedCardId={selectedCardId}
                setSelectedCardId={setSelectedCardId}
                animatePrjSectionCardsLg={animatePrjSectionCardsLg}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectCardContainerLg;
