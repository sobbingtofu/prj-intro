import {PROJECTS} from "@/src/store/constantStore";
import {useState, useRef, useEffect} from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectCardContainer() {
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

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto overflow-y-auto p-4 my-4
      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      <div ref={containerRef} className="flex flex-row justify-between w-full md:w-[1175px] 2xl:w-auto gap-[2%]">
        {PROJECTS.map((prj) => {
          return (
            <ProjectCard key={prj.id} prj={prj} selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId} />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCardContainer;
