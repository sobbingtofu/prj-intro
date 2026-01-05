import {useState} from "react";

function WorkExperienceSection() {
  const [selectedPoint, setSelectedPoint] = useState<string>("A");

  const points = ["A", "B", "C", "D"];

  return (
    <section
      id="WorkExperienceSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
    bg-background2 flex flex-col xl:justify-center sm:justify-start justify-center items-center overflow-y-auto"
    >
      {/* Timeline Container */}
      <div className="w-[80%] h-[70%] min-h-[500px] px-8 ">
        {/* Horizontal Line */}
        <div className="relative w-full h-1 bg-gray-700">
          {/* Timeline Points */}
          <div className="absolute inset-0 flex justify-between items-center">
            {points.map((point) => (
              <button
                key={point}
                onClick={() => setSelectedPoint(point)}
                className={`relative w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                  selectedPoint === point
                    ? "bg-blue-500 border-blue-600 scale-110"
                    : "bg-white border-gray-400 hover:border-blue-400"
                }`}
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center font-bold text-lg ${
                    selectedPoint === point ? "text-white" : "text-gray-700"
                  }`}
                >
                  {point}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Point Display */}
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700">
            선택된 지점: <span className="font-bold">{selectedPoint}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;
