import {myStoryType} from "@/src/store/constantStoreType";
import {useMemo, useEffect} from "react";
import OpenCloseIcon from "../OpenCloseIcon/OpenCloseIcon";

interface MyStoryAccordianCardProps {
  story: myStoryType;
  index: number;
  animateMyStoryContentsAppearance: boolean;
  selectedCardId: number;
  setSelectedCardId: (id: number) => void;
  contentRef: {current: HTMLDivElement | null};
}

function MyStoryAccordianCard({
  story,
  index,
  animateMyStoryContentsAppearance,
  selectedCardId,
  setSelectedCardId,
  contentRef,
}: MyStoryAccordianCardProps) {
  const handleCardClick = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  const isSelected = selectedCardId === story.id;
  const headerDelay = isSelected ? "0ms" : "500ms";
  const bodyDelay = isSelected ? "350ms" : "0ms";

  useEffect(() => {
    if (isSelected && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isSelected, contentRef]);

  // 콘텐츠 파싱 로직 메모이제이션
  const parsedContent = useMemo(() => {
    return story.content.split("<br>").map((line, lineIndex) => (
      <p key={lineIndex} className={lineIndex > 0 ? "mt-2.5" : ""}>
        {line.split(/(\*\*.*?\*\*)/).map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="font-bold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        })}
      </p>
    ));
  }, [story.content]);

  return (
    <div
      key={story.id}
      className={`transition-all duration-500 ease-out
                ${animateMyStoryContentsAppearance ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        transitionDelay: animateMyStoryContentsAppearance ? `${50 + index * 180}ms` : "0ms",
      }}
    >
      <div
        onClick={() => handleCardClick(story.id)}
        className="w-full bg-gradient-to-br from-background/50 to-background2/80 rounded-lg shadow-md overflow-hidden cursor-pointer select-none"
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between transition-all duration-500 ease-in-out p-4">
          <div className="flex-1">
            <h3
              className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-1 transition-all duration-500 ease-in-out"
              style={{transitionDelay: headerDelay}}
            >
              {story.keyWord}
            </h3>
            <h4
              className="text-[15px] sm:text-base font-bold text-gray-900 transition-all duration-500 ease-in-out"
              style={{transitionDelay: headerDelay}}
            >
              {story.id + ". " + story.title}
            </h4>
          </div>
          <div className="flex-shrink-0 ml-4">
            <OpenCloseIcon isSelected={isSelected} size="base" />
          </div>
        </div>

        {/* 확장되는 내용 (바디) */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden
                    ${isSelected ? "max-h-[30vh] opacity-100" : "max-h-0 opacity-0"}`}
          style={{transitionDelay: bodyDelay}}
        >
          <div className="px-4 pb-4 pt-0">
            <div
              ref={contentRef}
              className="text-xs sm:text-sm text-black leading-relaxed text-justify overflow-y-auto max-h-[28vh] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            >
              {parsedContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStoryAccordianCard;
