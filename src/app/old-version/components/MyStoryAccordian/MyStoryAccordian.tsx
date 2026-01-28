import {MY_STORIES} from "@/src/store/constantStore";
import MyStoryAccordianCard from "./MyStoryAccordianCard";
import {myStoryBentoCardTextRefs} from "@/src/store/refStore";

interface MyStoryAccordianProps {
  animateMyStoryContentsAppearance: boolean;
  selectedCardId: number;
  setSelectedCardId: (id: number) => void;
}

function MyStoryAccordian({
  animateMyStoryContentsAppearance,
  selectedCardId,
  setSelectedCardId,
}: MyStoryAccordianProps) {
  return (
    <div className="lg:hidden p-0 pb-8 my-4 w-full gap-y-4 flex flex-col max-h-[90vh]">
      {MY_STORIES.map((story, index) => (
        <MyStoryAccordianCard
          key={story.id}
          story={story}
          index={index}
          animateMyStoryContentsAppearance={animateMyStoryContentsAppearance}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          contentRef={myStoryBentoCardTextRefs[index]}
        />
      ))}
    </div>
  );
}

export default MyStoryAccordian;
