import {SKILL_CARDS} from "@/src/store/constantStore";

interface SkillStackCardContainerProps {
  animateSkillStackArea?: boolean;
}

function SkillStackCardContainer({animateSkillStackArea = false}: SkillStackCardContainerProps) {
  return (
    <div className="w-full flex justify-between">
      {SKILL_CARDS.map((card, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out
            ${animateSkillStackArea ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            transitionDelay: animateSkillStackArea ? `${index * 150}ms` : "0ms",
          }}
        >
          <h3 className="font-bold capitalize text-[11px] flex items-center gap-1.5">
            <div className={`h-1.5 w-1.5 rounded-full bg-black`}></div>
            {card.title}
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 mt-4">
            {card.skill.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-2 items-center">
                <div className="bg-black text-background text-[10px] font-bold px-1.5 py-1 rounded-xs">{item.key}</div>
                <p className="text-xs mb-[3px]">{item.item.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SkillStackCardContainer;
