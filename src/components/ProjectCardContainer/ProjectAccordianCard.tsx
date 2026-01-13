import {projectType} from "@/src/store/constantStoreType";
import {canClickPrjCard, prjAccordianCardTextContainerRef} from "@/src/store/refStore";
import Image from "next/image";
import {RefObject, SetStateAction, useRef} from "react";

interface ProjectAccordianCardProps {
  prj: projectType;
  index: number;
  animatePrjSectionCards: boolean;
  accordianCardsMapRef: RefObject<Map<string, HTMLDivElement>>;
  selectedCardId: string | null;
  setSelectedCardId: (id: string | null) => void;
  prevCardRectArr: RefObject<Map<string, DOMRect>>;
  cardToOpenIdRef: RefObject<string | null>;
  setOrderedProjects: (value: SetStateAction<projectType[]>) => void;
}

function ProjectAccordianCard({
  prj,
  index,
  animatePrjSectionCards,
  accordianCardsMapRef,
  selectedCardId,
  setSelectedCardId,
  prevCardRectArr,
  cardToOpenIdRef,
  setOrderedProjects,
}: ProjectAccordianCardProps) {
  const cardClickDelayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const cardClickDelay = 840; // ms

  const handleCardClick = (cardId: string) => {
    if (!canClickPrjCard.current) return;

    canClickPrjCard.current = false;

    if (cardClickDelayTimerRef.current) {
      clearTimeout(cardClickDelayTimerRef.current);
    }

    if (selectedCardId === cardId) {
      setSelectedCardId(null);
      cardClickDelayTimerRef.current = setTimeout(() => {
        canClickPrjCard.current = true;
      }, cardClickDelay);
    } else {
      // 현재 카드들의 위치 정보값을 "이전위치" Map 객체인 prevCardRectArr에 저장
      accordianCardsMapRef.current.forEach((cardHtmlElement, index) => {
        prevCardRectArr.current.set(index, cardHtmlElement.getBoundingClientRect());
      });

      // 클릭된 카드의 Id를 모든 애니메이션 동작 후 열릴 카드 ID ref에 저장
      cardToOpenIdRef.current = cardId;

      // orderedProjects 상태 변경해 리렌더링 및 useAnimatePrjAccordian 훅의 리렌더링 직전 useLayoutEffect 트리거
      setOrderedProjects((prev) => {
        const selectedPrj = prev.find((p) => p.id === cardId);
        if (!selectedPrj) return prev;
        const others = prev.filter((p) => p.id !== cardId);
        return [selectedPrj, ...others];
      });

      cardClickDelayTimerRef.current = setTimeout(() => {
        console.log("아코디언 카드 클릭 가능 상태로 변경");
        canClickPrjCard.current = true;
      }, cardClickDelay);
    }
  };

  const isSelected = selectedCardId === prj.id;
  const isNoCardSelected = selectedCardId === null;

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
      <div
        ref={(element) => {
          if (element) accordianCardsMapRef.current.set(prj.id, element);
          else accordianCardsMapRef.current.delete(prj.id);
        }}
        onClick={() => handleCardClick(prj.id)}
        className="w-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer select-none"
      >
        {/* 접혀있을 때 보이는 부분 (헤더) */}
        <div
          className="flex items-center transition-all duration-500 ease-in-out"
          style={{
            padding: isNoCardSelected ? "30px 12px" : isSelected ? "10px 12px" : "10px 12px",
          }}
        >
          <div
            className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center bg-white`}
            style={{
              width: isNoCardSelected ? "64px" : "32px",
              height: isNoCardSelected ? "64px" : "32px",
              marginRight: isNoCardSelected ? "16px" : "8px",
              transitionDelay: headerDelay,
            }}
          >
            <div className="relative w-[90%] h-[90%] rounded overflow-hidden flex items-center justify-center">
              <Image
                src={prj.iconSrc || ""}
                alt={prj.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3
              className="text-base font-bold mb-2 transition-all duration-500 ease-in-out"
              style={{transitionDelay: headerDelay}}
            >
              {prj.title}
            </h3>
            <div
              className="transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isNoCardSelected ? "64px" : "0px",
                opacity: isNoCardSelected ? 1 : 0,
                transform: isSelected ? "translateX(-20px)" : "translateX(0)",
                transitionDelay: headerDelay,
              }}
            >
              <p className="text-xs text-gray-600 duration-500 ease-in-out flex-shrink-0">{prj.description}</p>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-300
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
                    ${isSelected ? "max-h-[52vh] opacity-100" : "max-h-0 opacity-0"}`}
          style={{transitionDelay: bodyDelay}}
        >
          <div className="px-4 pb-4 space-y-4 pt-1">
            {/* 이미지 */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src={prj.imageSrc?.[0] || ""}
                alt={prj.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>

            {/* 주요 기능 */}
            {isSelected && (
              <div className="space-y-2">
                <div
                  className="space-y-2 overflow-y-auto max-h-[18vh] pr-2 border-b border-gray-200 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white"
                  ref={prjAccordianCardTextContainerRef}
                >
                  {prj.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="font-medium text-gray-800">{feature.point}:</span>
                      <span className="text-gray-600 ml-1">{feature.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 기술스택 */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {prj.techStack.map((tech, idx) => (
                  <span key={idx} className=" text-blue-700 text-[11px] rounded-full">
                    {"#" + tech}
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
}

export default ProjectAccordianCard;
