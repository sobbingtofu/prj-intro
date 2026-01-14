import useAnimateMyStoryCard from "@/src/hooks/useAnimateMyStoryCard/useAnimateMyStoryCard";
import {myStoryType} from "@/src/store/constantStoreType";
import {useMemo, CSSProperties} from "react";

interface MyStoryBentoCardProps {
  story: myStoryType;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  setSelectedCardId: (id: number) => void;
  contentRef: {current: HTMLDivElement | null};
}

function MyStoryBentoCard({story, index, isVisible, isSelected, setSelectedCardId, contentRef}: MyStoryBentoCardProps) {
  const {showContent, isTitleCenter} = useAnimateMyStoryCard({isSelected});

  const handleCardClick = (storyId: number) => {
    setSelectedCardId(storyId);
  };

  const cardStyle = useMemo<CSSProperties>(
    () => ({
      transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
      "--card-height": isSelected ? "350px" : "90px",
      minWidth: isSelected ? "500px" : "366px",
      minHeight: isSelected ? "320px" : "120px",
    }),
    [isVisible, index, isSelected]
  ) as CSSProperties & {"--card-height": string};

  const titleContainerStyle = useMemo<CSSProperties>(
    () => ({
      top: isTitleCenter ? "50%" : "36px",
      left: isTitleCenter ? "50%" : "36px",
      transform: isTitleCenter ? "translate(-50%, -50%)" : "translate(0, 0)",
    }),
    [isTitleCenter]
  );

  const titleStyle = useMemo<CSSProperties>(
    () => ({
      left: isTitleCenter ? "50%" : "0px",
      transform: isTitleCenter ? "translate(-50%, -50%)" : "translate(0, 0)",
    }),
    [isTitleCenter]
  );

  const cardClassName = useMemo(
    () =>
      `relative bg-gradient-to-br from-background/50 to-background2/80
       rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden
       transition-all duration-500 ease-out p-[36px]
       ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
    [isVisible]
  );

  const contentClassName = useMemo(
    () =>
      `2xl:text-base text-sm text-black leading-relaxed text-justify transition-all duration-400 ease-in-out
      2xl:mt-20 mt-16 h-[200px] overflow-y-auto pr-1.5 p-1 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 
       ${showContent ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`,
    [showContent]
  );

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
    <div onClick={() => handleCardClick(story.id)} key={story.id} className={cardClassName} style={cardStyle}>
      <div
        className="absolute transition-all duration-500 ease-out select-none will-change-transform"
        style={titleContainerStyle}
      >
        <div>
          <h1
            className="absolute text-sm font-semibold text-primary uppercase tracking-wide mb-2 
                       transition-all duration-500 ease-out select-none whitespace-nowrap will-change-transform"
            style={titleStyle}
          >
            {story.keyWord}
          </h1>
          <h3 className="pt-6 text-xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            {story.id + ". " + story.title}
          </h3>
        </div>
      </div>
      <div
        className={contentClassName}
        ref={contentRef}
        style={{
          opacity: isSelected ? undefined : 0,
          pointerEvents: isSelected ? "auto" : "none",
          contentVisibility: isSelected ? "visible" : "hidden",
        }}
      >
        {parsedContent}
      </div>
    </div>
  );
}

export default MyStoryBentoCard;
