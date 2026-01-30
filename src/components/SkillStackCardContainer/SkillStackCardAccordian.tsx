import useSkillCardCarousel from "@/src/hooks/useSkillCardCarousel/useSkillCardCarousel";
import {SKILL_CARDS_OLD} from "@/src/store/constantStore";

interface SkillStackCardContainerProps {
  animateSkillStackArea?: boolean;
}

function SkillStackCardContainer({animateSkillStackArea = false}: SkillStackCardContainerProps) {
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
        md:mt-8 mt-[6vh] min-h-[240px]
        "
    >
      {/* sm 미만: 캐러셀 레이아웃 */}
      <div
        className={`w-full sm:hidden overflow-hidden select-none mt-3 flex flex-col justify-start transition-all duration-250 ease-out
          ${animateSkillStackArea ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}
        style={{
          transitionDelay: animateSkillStackArea ? `${400}ms` : "0ms",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className={`w-full flex items-start justify-center h-[210px] transition-all duration-250 ease-out
            ${animateSkillStackArea ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}
          style={{
            transitionDelay: animateSkillStackArea ? `${400}ms` : "0ms",
          }}
        >
          {SKILL_CARDS_OLD.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[90%] rounded-xl border border-gray-100 bg-white p-4 shadow-sm  h-[190px] 
                  transition-all duration-500 ease-out cursor-grab active:cursor-grabbing flex flex-col
                  ${getCardPosition(index)}`}
              style={{touchAction: "pan-y"}}
            >
              <h3 className="mb-3 text-base font-bold text-base flex-shrink-0">{card.title}</h3>
              <div className="flex flex-col justify-between flex-1 text-[13px] text-text-secondary text-gray-700">
                {card.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${card.color}`}></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 인디케이터 점들 */}
        <div className="flex justify-center gap-2">
          {SKILL_CARDS_OLD.map((_, index) => (
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
