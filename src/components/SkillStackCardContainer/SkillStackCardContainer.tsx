import React, {useRef, useState} from "react";

function SkillStackCardContainer() {
  const skillCards = [
    {
      title: "Modern Frontend",
      color: "bg-primary",
      items: [
        "React.js, Next.js (App Router)",
        "TypeScript, JavaScript (ES6+)",
        "Zustand, Redux Toolkit",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Systems",
      color: "bg-orange-500",
      items: ["Spring Boot (Java, JSP)", "MSSQL, SQL Query", "RESTful API Design", "System Architecture Design"],
    },
    {
      title: "Design & UI",
      color: "bg-purple-500",
      items: ["Figma", "UI/UX Design", "User Flow Design", "Prototyping & Wireframing"],
    },
    {
      title: "Product & Strategy",
      color: "bg-green-500",
      items: [
        "프로젝트 및 프로덕트 관리 (PM)",
        "요구사항 분석 및 기술 명세 정의",
        "PRD/기능설계서 작성",
        "WBS 기반 일정 및 리소스 관리",
      ],
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // 왼쪽으로 스와이프 - 다음 카드
        setActiveCardIndex((prev) => (prev + 1) % skillCards.length);
      } else {
        // 오른쪽으로 스와이프 - 이전 카드
        setActiveCardIndex((prev) => (prev - 1 + skillCards.length) % skillCards.length);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          setActiveCardIndex((prev) => (prev + 1) % skillCards.length);
        } else {
          setActiveCardIndex((prev) => (prev - 1 + skillCards.length) % skillCards.length);
        }
      }
      isDragging.current = false;
    }
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeCardIndex;
    if (diff === 0) return "translate-x-0 scale-100 z-20 opacity-100";
    if (diff === 1 || diff === -(skillCards.length - 1)) return "translate-x-[70%] scale-75 z-10 opacity-40";
    if (diff === -1 || diff === skillCards.length - 1) return "-translate-x-[70%] scale-75 z-10 opacity-40";
    return "translate-x-[200%] scale-50 z-0 opacity-0";
  };

  return (
    <div
      className="md:w-[80%] w-[90%] flex
        flex-col justify-start
        border-black border
        md:mt-8 mt-3 h-[240px]
        "
    >
      <p className="w-full font-[700] md:text-left text-center md:text-xl text-[14px] sm:mt-0 mt-2 ">
        {"기술 스택 (Tech Stack)"}
      </p>

      {/* sm 이상: 기존 그리드 레이아웃 */}
      <div
        className="w-full hidden sm:grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1
          md:mt-6 mt-2 justify-center gap-x-8 gap-y-4"
      >
        {skillCards.map((card, index) => (
          <div
            key={index}
            className="flex-1 rounded-xl border border-gray-100 bg-white md:p-6 p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="xl:mb-3 mb-1.5 xl:text-lg font-bold ">{card.title}</h3>
            <ul className="space-y-2 text-[12px] xl:text-sm text-text-secondary text-gray-700">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.color}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* sm 미만: 캐러셀 레이아웃 */}
      <div
        className="w-full sm:hidden overflow-hidden h-[180px] select-none mt-2 flex flex-col justify-start"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="w-full h-full flex items-start justify-center">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[85%] rounded-xl border border-gray-100 bg-white p-4 shadow-sm 
                  transition-all duration-500 ease-out cursor-grab active:cursor-grabbing
                  ${getCardPosition(index)}`}
              style={{touchAction: "pan-y"}}
            >
              <h3 className="mb-1.5 text-base font-bold text-text-main">{card.title}</h3>
              <ul className="space-y-2 text-[12px] text-text-secondary text-gray-700">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${card.color}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 인디케이터 점들 */}
        <div className="flex justify-center gap-2">
          {skillCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeCardIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillStackCardContainer;
