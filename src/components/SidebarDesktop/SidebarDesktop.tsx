"use client";

import useAnimateMainSection from "@/src/hooks/useAnimateMainSection/useAnimateMainSection";
import {SECTIONS} from "@/src/store/constantStore";
import Image from "next/image";
import {mainSectionRef} from "@/src/store/refStore";
import zustandStore from "@/src/store/zustandStore";

interface SidebarDesktopProps {
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SidebarDesktop({currentSectionIndex, setCurrentSectionIndex}: SidebarDesktopProps) {
  const sectionNameMap: Record<string, string> = {
    main: "Overview",
    workExperience: "Work Experience",
    project: "Dev Projects",
  };

  const {animateArrowDown} = useAnimateMainSection({mainSectionRef});

  const animateNavigation = zustandStore((state) => state.animateNavigation);

  return (
    <div
      className="hidden sm:block z-50 sm:w-[180px] sm:h-screen sm:sticky top-0 shrink-0
      bg-background"
    >
      <div className="bg-background flex justify-between items-center flex-col h-full max-h-[830px] min-h-[330px] space-y-5 mt-10 pb-20">
        {/* 위화살표 추후 구현 ${animateArrowDown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"} */}
        {
          <div
            className={`w-[80px] h-[95px] ml-auto mr-[20px] relative
              transition-all duration-700 ease-out rotate-180 opacity-0 
              `}
          >
            <Image src="/icon/arrow-down.png" alt="위화살표" fill className="object-contain" priority />
          </div>
        }
        {/* 네비게이션 */}
        {
          <div className="flex sm:flex-col h-[50%] sm:justify-between sm:items-start sm:px-2">
            {SECTIONS.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSectionIndex(section.id)}
                className={`w-full py-3 px-4 rounded-xl transition-all duration-300 ease-out cursor-pointer text-right
                ${
                  currentSectionIndex === section.id
                    ? "bg-white text-black font-semibold scale-105 shadow-lg"
                    : "text-gray-400 hover:text-gray-700 hover:scale-102"
                }
                ${animateNavigation ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
          `}
                style={{
                  transitionDelay: animateNavigation ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="text-[13px] font-medium">{sectionNameMap[section.name] || section.name}</div>
              </button>
            ))}
          </div>
        }
        {/* 아래화살표*/}
        {
          <div
            className={`w-[80px] h-[95px] ml-auto mr-[20px] relative cursor-pointer select-none hover:scale-106
              transition-all duration-200 ease-out
              ${animateArrowDown ? "opacity-100 translate-y-0 animate-gentle-bounce" : "opacity-0 -translate-y-8"}`}
            onClick={() => {
              setCurrentSectionIndex(1);
            }}
          >
            <Image src="/icon/arrow-down.png" alt="프로필" fill className="object-contain" priority />
          </div>
        }
      </div>
    </div>
  );
}

export default SidebarDesktop;
