import useSkillCardCarousel from "@/src/hooks/useSkillCardCarousel/useSkillCardCarousel";
import {SKILL_CARDS} from "@/src/store/constantStore";

interface SkillStackCardContainerProps {
  animateSkillStackArea?: boolean;
}

function SkillStackCardAccordian({animateSkillStackArea = false}: SkillStackCardContainerProps) {
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
    <div className="w-[100%] flex flex-col justify-start mt-[6vh] min-h-[240px]">
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
          {SKILL_CARDS.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[95%] rounded-xl border border-gray-100 bg-white p-4 shadow-sm  h-[190px] 
                  transition-all duration-500 ease-out cursor-grab active:cursor-grabbing flex flex-col
                  ${getCardPosition(index)}`}
              style={{touchAction: "pan-y"}}
            >
              <h3 className="mb-4 text-base font-bold  text-[12px] flex-shrink-0">{card.title}</h3>
              <div className="flex flex-col justify-center gap-y-6 flex-1  text-gray-700">
                {card.skill.map((skillItem, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="font-bold text-white bg-black px-1.5 py-1 rounded-sm text-[10px]">
                      {skillItem.key}
                    </div>
                    <div className="text-[12px]">{skillItem.item}</div>
                  </div>
                ))}
              </div>
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

export default SkillStackCardAccordian;
