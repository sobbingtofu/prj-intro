import {experienceMilestoneType} from "@/src/store/constantStoreType";

interface WorkExpCardProps {
  selectedMileStone: experienceMilestoneType;
  animateWorkExpCard: boolean;
}

function WorkExpCard({selectedMileStone, animateWorkExpCard}: WorkExpCardProps) {
  return (
    <div
      className={`w-[75%] flex flex-col justify-start items-start mt-20 mb-12 transition-all duration-500
        text-black
        ${animateWorkExpCard ? "opacity-100 " : "opacity-0"}
        `}
    >
      {/* name, duration */}
      <div className="w-full flex justify-between items-baseline">
        <h1 className="text-3xl font-black">{selectedMileStone.name.replace("<br>", " ")}</h1>
        <div className="text-[12px] bg-gray-200 px-4 py-1 text-gray-700 rounded-[12px]">
          <p>{selectedMileStone.duration.replace("<br>", " ")}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkExpCard;
