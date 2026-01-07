import {MILESTONES} from "@/src/store/constantStore";
import {useState} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);

  const points = ["A", "B", "C", "D"];

  return (
    <section
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
    bg-white flex flex-col xl:justify-center sm:justify-start justify-center items-center overflow-y-auto"
    >
      {/* Timeline Container */}
      <div className="md:w-[80%] w-[85%] h-[70%] min-h-[500px] md:px-8 px-0">
        {/* Horizontal Line */}
        <div className="relative w-full h-0.5 bg-prime-gray">
          {/* Timeline Points */}
          <div className="absolute inset-0 flex justify-between items-center ">
            {MILESTONES.map((milestone) => (
              <div
                key={milestone.id}
                onClick={() => setSelectedMilestoneId(milestone.id)}
                className={`relative w-1 h-1 rounded-full border-4 transition-all duration-300 
                  ${
                    selectedMilestoneId === milestone.id
                      ? "bg-blue-500 border-blue-600 scale-110"
                      : "bg-white border-gray-400 hover:border-blue-400"
                  }`}
              >
                <span
                  className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold md:text-sm text-[12px] w-[100px]
                  ${selectedMilestoneId === milestone.id ? "text-black" : "text-gray-700"}`}
                >
                  {milestone.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Point Display */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-700">
            선택된 지점: <span className="font-bold">{selectedMilestoneId}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;
