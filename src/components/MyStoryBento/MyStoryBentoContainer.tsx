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

  // 타이머 정리 헬퍼 함수
  const clearTimer = () => {
    if (overflowYDelayTimer.current) {
      clearTimeout(overflowYDelayTimer.current);
      overflowYDelayTimer.current = null;
    }
  };

  // 1. 섹션 진입/퇴장 시 overflow 제어
  useEffect(() => {
    clearTimer();

    if (animateMyStoryContentsAppearance) {
      overflowYDelayTimer.current = setTimeout(() => setOverflowY("auto"), 3000);
    } else {
      setTimeout(() => setOverflowY("hidden"), 0);
    }

    return clearTimer;
  }, [animateMyStoryContentsAppearance]);

  // 2. 카드 선택 변경 시 overflow 제어
  useEffect(() => {
    clearTimer();
    setTimeout(() => setOverflowY("hidden"), 0);

    overflowYDelayTimer.current = setTimeout(() => setOverflowY("auto"), 5000);

    return clearTimer;
  }, [selectedCardId]);

  return (
    <div
      className={`2xl:mt-16 mt-8 w-full grid-cols-2 grid-rows-2 gap-4 h-[610px] 
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-whites
            hidden lg:grid
            `}
      style={{
        overflowY: overflowY == "hidden" ? "hidden" : "auto",
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
