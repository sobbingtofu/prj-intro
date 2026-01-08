import {MILESTONES} from "@/src/store/constantStore";
import {useState} from "react";

function WorkExperienceSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(1);

  return (
    <section
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
    bg-white flex flex-col xl:justify-center sm:justify-start justify-center items-center overflow-y-auto"
    >
      {/* Timeline Container */}
      <div className="w-[80%] h-[70%] min-h-[500px] md:px-8 px-0">
        {/* Horizontal Line */}
        <div className="relative w-full h-0.5 bg-prime-gray">
          {/* Timeline Points */}
          <div className="absolute inset-0 flex justify-between items-center flex-row-reverse">
            {MILESTONES.map((milestone) => (
              <div
                key={milestone.id}
                onClick={() => setSelectedMilestoneId(milestone.id)}
                className="relative flex items-center cursor-pointer group"
              >
                {/* duration*/}
                <div
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-center font-medium
                    md:text-[11px] text-[9px] transition-colors duration-300
                    ${selectedMilestoneId === milestone.id ? "text-black" : "text-gray-400 group-hover:text-gray-700"}`}
                >
                  <div className="sm:block hidden whitespace-nowrap">{milestone.duration.replace(/<br>/g, " ")}</div>
                  <div className="sm:hidden block">
                    {milestone.duration.split("<br>").map((text, index) => (
                      <div key={index} className="whitespace-nowrap">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                {/* 점 */}
                <div
                  className={`w-1 h-1 rounded-full border-4 transition-all duration-300 
                    ${
                      selectedMilestoneId === milestone.id
                        ? "bg-blue-500 border-blue-600 scale-110"
                        : "bg-white border-gray-400 group-hover:border-blue-400"
                    }`}
                />
                {/* milestone name*/}
                <div
                  className={`absolute pt-14 left-1/2 -translate-x-1/2 text-center font-bold
                    md:text-[12px] text-[10px] transition-colors duration-300
                    ${selectedMilestoneId === milestone.id ? "text-black" : "text-gray-400 group-hover:text-gray-700"}`}
                >
                  <div className="sm:block hidden">
                    {milestone.id !== 2 ? (
                      <div className="whitespace-nowrap">{milestone.name.replace(/<br>/g, " ")}</div>
                    ) : (
                      <>
                        {milestone.name.split("<br>").map((text, index) => (
                          <div key={index} className="whitespace-nowrap">
                            {text}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="sm:hidden block">
                    {milestone.name.split("<br>").map((text, index) => (
                      <div key={index} className="whitespace-nowrap">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;
