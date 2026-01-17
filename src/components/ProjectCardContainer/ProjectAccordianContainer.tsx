import {PROJECTS} from "@/src/store/constantStore";
import {useRef, useEffect} from "react";
import useAnimatePrjAccordian from "@/src/hooks/useAnimatePrjAccordian/useAnimatePrjAccordian";
import ProjectAccordianCard from "./ProjectAccordianCard";
import zustandStore from "@/src/store/zustandStore";

interface ProjectAccordianContainerProps {
  animatePrjSectionCards: boolean;
}

function ProjectAccordianContainer({animatePrjSectionCards}: ProjectAccordianContainerProps) {
  const {selectedAccordianCardId, setSelectedAccordianCardId, orderedProjects, setOrderedProjects} = zustandStore();

  /** 아코디언 위치할 컨테이너 ref */
  const prjCardsContainerRef = useRef<HTMLDivElement>(null);

  /** 아코디언의 개별 카드들의 ref를 map으로 저장 */
  const accordianCardsMapRef = useRef<Map<string, HTMLDivElement>>(new Map());

  const {prevCardRectArr, cardToOpenIdRef} = useAnimatePrjAccordian({
    accordianCardsMapRef,
    setSelectedCardId: setSelectedAccordianCardId,
    orderedProjects,
  });

  const isNoCardSelected = selectedAccordianCardId === null;

  useEffect(() => {
    /** 아코디언 컨테이너 외부 클릭 시 >> 카드 선택 해제 */
    const handleClickOutside = (event: MouseEvent) => {
      if (prjCardsContainerRef.current && !prjCardsContainerRef.current.contains(event.target as Node)) {
        setSelectedAccordianCardId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedAccordianCardId]);

  useEffect(() => {
    // 섹션을 벗어날 때 아코디언 카드 순서와 선택 상태 초기화
    if (!animatePrjSectionCards) {
      setSelectedAccordianCardId(null);
      setOrderedProjects(PROJECTS);
    }
  }, [animatePrjSectionCards, setSelectedAccordianCardId, setOrderedProjects]);

  return (
    <div
      ref={prjCardsContainerRef}
      className={`lg:hidden p-0 pb-8 my-4 w-full gap-y-4 flex flex-col max-h-[90vh] transition-all duration-500 ease-in-out`}
      style={{justifyContent: isNoCardSelected ? "flex-start" : "space-between"}}
    >
      {orderedProjects.map((prj, index) => {
        return (
          <ProjectAccordianCard
            key={index}
            accordianCardsMapRef={accordianCardsMapRef}
            selectedCardId={selectedAccordianCardId}
            setSelectedCardId={setSelectedAccordianCardId}
            prevCardRectArr={prevCardRectArr}
            cardToOpenIdRef={cardToOpenIdRef}
            prj={prj}
            index={index}
            animatePrjSectionCards={animatePrjSectionCards}
          />
        );
      })}
    </div>
  );
}

export default ProjectAccordianContainer;
