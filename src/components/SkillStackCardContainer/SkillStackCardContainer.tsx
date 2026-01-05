import useSkillCardCarousel from "@/src/hooks/useSkillCardCarousel/useSkillCardCarousel";
import {SKILL_CARDS} from "@/src/store/constantStore";

function SkillStackCardContainer() {
  const {
    activeCardIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    getCardPosition,
    setActiveCardIndex,
  } = useSkillCardCarousel();

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
        className="w-full hidden sm:grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2
          md:mt-6 mt-2 justify-center gap-x-8 gap-y-4"
      >
        {SKILL_CARDS.map((card, index) => (
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
          {SKILL_CARDS.map((card, index) => (
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
          {SKILL_CARDS.map((_, index) => (
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
