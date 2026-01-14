import {MY_STORIES} from "@/src/store/constantStore";
import MyStoryBentoCard from "./MyStoryBentoCard";
import {useEffect, useRef, useState} from "react";
import {myStoryBentoCardTextRefs} from "@/src/store/refStore";

interface MyStoryBentoContainerProps {
  selectedCardId: number;
  animateMyStoryContentsAppearance: boolean;
  setSelectedCardId: React.Dispatch<React.SetStateAction<number>>;
}

function MyStoryBentoContainer({
  selectedCardId,
  animateMyStoryContentsAppearance,
  setSelectedCardId,
}: MyStoryBentoContainerProps) {
  const [overflowY, setOverflowY] = useState<string>("hidden");

  const overflowYDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (animateMyStoryContentsAppearance) {
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
    }

    return () => {
      if (overflowYDelayTimer.current) {
        clearTimeout(overflowYDelayTimer.current);
        overflowYDelayTimer.current = null;
      }
    };
  }, [animateMyStoryContentsAppearance, setSelectedCardId]);

  useEffect(() => {
    setTimeout(() => {
      setOverflowY("hidden");
    }, 0);

    if (overflowYDelayTimer.current) {
      clearTimeout(overflowYDelayTimer.current);
      overflowYDelayTimer.current = null;
    }
    overflowYDelayTimer.current = setTimeout(() => {
      setOverflowY("auto");
    }, 1000);
  }, [selectedCardId]);

  return (
    <div
      className={`mt-16 w-full grid grid-cols-2 grid-rows-2 gap-4 h-[610px] 
            overflow-y-${overflowY} scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-whites`}
      style={{
        gridTemplateColumns: selectedCardId === 1 || selectedCardId === 3 ? "6fr 4fr" : "4fr 6fr",
        gridTemplateRows: selectedCardId === 1 || selectedCardId === 2 ? "6fr 4fr" : "4fr 6fr",
        transition: "grid-template-columns 350ms ease-out, grid-template-rows 350ms ease-out",
      }}
    >
      {MY_STORIES.map((story, index) => (
        <MyStoryBentoCard
          key={story.id}
          story={story}
          index={index}
          isVisible={animateMyStoryContentsAppearance}
          isSelected={selectedCardId === story.id}
          setSelectedCardId={setSelectedCardId}
          contentRef={myStoryBentoCardTextRefs[index]}
        />
      ))}
    </div>
  );
}

export default MyStoryBentoContainer;
