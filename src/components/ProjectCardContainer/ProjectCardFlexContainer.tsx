import {PROJECTS} from "@/src/store/constantStore";
import {useRef, useEffect, useState} from "react";
import ProjectCardLg from "../ProjectCard/ProjectCardLg";
import zustandStore from "@/src/store/zustandStore";

interface ProjectCardFlexContainerProps {
  animatePrjSectionCardsLg: boolean;
}

function ProjectCardFlexContainer({animatePrjSectionCardsLg}: ProjectCardFlexContainerProps) {
  const {selectedFlexCardId, setSelectedFlexCardId} = zustandStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const [overflowY, setOverflowY] = useState<string>("hidden");

  const overflowYDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedFlexCardId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedFlexCardId]);

  useEffect(() => {
    if (animatePrjSectionCardsLg) {
      overflowYDelayTimer.current = setTimeout(() => {
        setOverflowY("auto");
      }, 3000);
    } else {
      if (overflowYDelayTimer.current) {
        clearTimeout(overflowYDelayTimer.current);
        overflowYDelayTimer.current = null;
      }
      overflowYDelayTimer.current = setTimeout(() => {
        setOverflowY("hidden");
      }, 0);
      setSelectedFlexCardId(null);
    }

    return () => {
      if (overflowYDelayTimer.current) {
        clearTimeout(overflowYDelayTimer.current);
        overflowYDelayTimer.current = null;
      }
    };
  }, [animatePrjSectionCardsLg, setSelectedFlexCardId]);

  return (
    <div
      ref={containerRef}
      className={`hidden lg:block p-4 pb-8 my-4
        w-full overflow-x-auto overflow-y-${overflowY} 
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
    >
      <div ref={containerRef} className="flex flex-row justify-between w-auto gap-[2%]">
        {PROJECTS.map((prj, index) => {
          return (
            <ProjectCardLg
              key={prj.id}
              prj={prj}
              selectedCardId={selectedFlexCardId}
              setSelectedCardId={setSelectedFlexCardId}
              animatePrjSectionCardsLg={animatePrjSectionCardsLg}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCardFlexContainer;
