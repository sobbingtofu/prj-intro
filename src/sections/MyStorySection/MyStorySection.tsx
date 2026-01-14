import MyStoryCard from "@/src/components/MyStoryCard/MyStoryCard";
import useAnimateMyStorySection from "@/src/hooks/useAnimateMyStorySection/useAnimateMyStorySection";
import {MY_STORIES} from "@/src/store/constantStore";
import React, {useRef, useState} from "react";

function MyStorySection() {
  const myStorySectionRef = useRef<HTMLDivElement>(null!);

  const [animateMyStorySectionTitle, setAnimateMyStorySectionTitle] = useState<boolean>(false);
  const [animateMyStoryContentsAppearance, setAnimateMyStoryContentsAppearance] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<number>(1);

  useAnimateMyStorySection({
    animateMyStorySectionTitle,
    setAnimateMyStorySectionTitle,
    myStorySectionRef,
    setAnimateMyStoryContentsAppearance,
    setSelectedCardId,
  });

  return (
    <section
      id="MyStorySection"
      ref={myStorySectionRef}
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px] pb-10
      bg-white flex flex-col xl:justify-start sm:justify-start justify-center items-center "
    >
      <div
        className="flex flex-col items-center flex-shrink-0 h-full
        w-[90vw] sm:w-[80vw] "
      >
        {/* 섹션 타이틀 */}
        <div className="mt-[10vh] w-full">
          <h1
            className={`font-bold text-[14px] md:text-xl transition-all duration-600 ease-out
              ${animateMyStorySectionTitle ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {"My Story"}
          </h1>
        </div>

        {/* My Story 콘텐츠 */}
        {
          <div
            className={`mt-16 w-full grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[480px] max-h-[610px]`}
            style={{
              gridTemplateColumns: selectedCardId === 1 || selectedCardId === 3 ? "6fr 4fr" : "4fr 6fr",
              gridTemplateRows: selectedCardId === 1 || selectedCardId === 2 ? "6fr 4fr" : "4fr 6fr",
              transition: "grid-template-columns 350ms ease-out, grid-template-rows 350ms ease-out",
            }}
          >
            {MY_STORIES.map((story, index) => (
              <MyStoryCard
                key={story.id}
                story={story}
                index={index}
                isVisible={animateMyStoryContentsAppearance}
                isSelected={selectedCardId === story.id}
                setSelectedCardId={setSelectedCardId}
              />
            ))}
          </div>
        }
      </div>
    </section>
  );
}

export default MyStorySection;
