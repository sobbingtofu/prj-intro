import useAnimateMyStoryCard from "@/src/hooks/useAnimateMyStoryCard/useAnimateMyStoryCard";
import {myStoryType} from "@/src/store/constantStoreType";

interface MyStoryCardProps {
  story: myStoryType;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  setSelectedCardId: (id: number) => void;
}

function MyStoryCard({story, index, isVisible, isSelected, setSelectedCardId}: MyStoryCardProps) {
  const {showContent, isTitleCenter} = useAnimateMyStoryCard({isSelected});

  const handleCardClick = (storyId: number) => {
    setSelectedCardId(storyId);
  };

  return (
    <div
      onClick={() => handleCardClick(story.id)}
      key={story.id}
      className={`relative bg-gradient-to-br from-background/50 to-background2/80
                rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden
                transition-all duration-500 ease-out
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                p-[36px]
                `}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
      }}
    >
      <div
        className="absolute transition-all duration-500 ease-out select-none"
        style={{
          top: isTitleCenter ? "50%" : "36px",
          left: isTitleCenter ? "50%" : "36px",
          transform: isTitleCenter ? "translate(-50%, -50%)" : "translate(0, 0)",
        }}
      >
        <div className={isTitleCenter ? "text-center" : "text-left"}>
          <h1 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{story.keyWord}</h1>
          <h3 className="text-xl font-bold text-gray-900 mb-4 whitespace-nowrap">{story.id + ". " + story.title}</h3>
        </div>
      </div>
      {isSelected && (
        <div
          className={`text-base text-black leading-relaxed text-justify transition-all duration-400 ease-in-out pt-20
            ${showContent ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          {story.content.split("<br>").map((line, lineIndex) => (
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
              {lineIndex < story.content.split("<br>").length - 1 && <br />}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyStoryCard;
