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
    <div ref={containerRef} className="w-full grid md:grid-cols-3 mt-10 gap-x-10 h-auto">
      {PROJECTS.map((prj) => {
        return (
          <ProjectCard key={prj.id} prj={prj} selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId} />
        );
      })}
    </div>
  );
}

export default ProjectCardContainer;
