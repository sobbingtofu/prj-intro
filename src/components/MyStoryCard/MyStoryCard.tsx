import {myStoryType} from "@/src/store/constantStoreType";
import {useState, useEffect, useRef} from "react";
import OpenCloseIcon from "@/src/components/OpenCloseIcon/OpenCloseIcon";

interface MyStoryCardProps {
  story: myStoryType;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  onToggle: () => void;
}

function MyStoryCard({story, index, isVisible, isSelected, onToggle}: MyStoryCardProps) {
  const [isThisCardSelected, setIsThisCardSelected] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const showContentDelayTimer = useRef<NodeJS.Timeout | null>(null);

  const canClickThisCardDelay = 800; //ms
  const canClickThisCardDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const canClickThisCard = useRef<boolean>(true);

  useEffect(() => {
    setIsThisCardSelected(isSelected);
  }, [isSelected]);

  useEffect(() => {
    if (isThisCardSelected) {
      // 카드가 열릴 때: 높이 확장 후 텍스트 페이드인
      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(true);
      }, 300);

      canClickThisCardDelayTimer.current = setTimeout(() => {
        canClickThisCard.current = true;
      }, canClickThisCardDelay);
    } else {
      if (showContentDelayTimer.current) {
        clearTimeout(showContentDelayTimer.current);
      }

      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(false);
      }, 0);

      canClickThisCardDelayTimer.current = setTimeout(() => {
        canClickThisCard.current = true;
      }, canClickThisCardDelay);
    }

    return () => {
      if (showContentDelayTimer.current) {
        clearTimeout(showContentDelayTimer.current);
        showContentDelayTimer.current = null;
      }
      if (canClickThisCardDelayTimer.current) {
        clearTimeout(canClickThisCardDelayTimer.current);
        canClickThisCardDelayTimer.current = null;
      }
    };
  }, [isThisCardSelected]);

  const handleCardClick = () => {
    if (!canClickThisCard.current) return;

    canClickThisCard.current = false;

    onToggle();
  };

  return (
    <div
      onClick={handleCardClick}
      key={story.id}
      className={`relative flex-shrink-0 min-w-[250px] bg-gradient-to-br from-background/50 to-background2/80
                rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-out
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                cursor-pointer overflow-hidden flex-1
                `}
      style={{
        transitionDelay: `${index * 150}ms`,
        height: isThisCardSelected ? "530px" : "120px",
      }}
    >
      <div className="absolute top-4 right-4">
        <OpenCloseIcon isSelected={isThisCardSelected} size="base" />
      </div>

      <div className="mb-3">
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{story.keyWord}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{story.title}</h3>

      <div
        className={`text-[15px] text-black leading-relaxed text-justify transition-all duration-300 ease-out
          ${showContent ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
      >
        {story.content.split("<br>").map((line, lineIndex) => (
          <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : ""}>
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
            {lineIndex < story.content.split("<br>").length - 1 && <br />}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MyStoryCard;
