import MyStoryBentoContainer from "@/src/components/MyStoryBento/MyStoryBentoContainer";
import MyStoryAccordian from "@/src/components/MyStoryAccordian/MyStoryAccordian";
import useAnimateMyStorySection from "@/src/hooks/useAnimateMyStorySection/useAnimateMyStorySection";
import {useRef, useState} from "react";

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

        {/* lg 이상*/}
        <MyStoryBentoContainer
          selectedCardId={selectedCardId}
          animateMyStoryContentsAppearance={animateMyStoryContentsAppearance}
          setSelectedCardId={setSelectedCardId}
        />

        {/* lg 이하 */}
        <MyStoryAccordian
          animateMyStoryContentsAppearance={animateMyStoryContentsAppearance}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
        />
      </div>
    </section>
  );
}

export default MyStorySection;
