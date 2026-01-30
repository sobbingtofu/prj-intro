import {SECTIONS} from "@/src/store/constantStore";

interface SidebarMobileProps {
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SidebarMobile({currentSectionIndex, setCurrentSectionIndex}: SidebarMobileProps) {
  const sectionNameMap: Record<string, string> = {
    main: "Overview",
    workExperience: "Work",
    project: "Projects",
  };

  return (
    <div
      className="sm:hidden flex z-200 h-[50px] w-full fixed top-0 shrink-0 px-4
      bg-gradient-to-r from-[#050d2a] to-black justify-between items-center shadow-lg"
    >
      <div className="flex flex-row w-full justify-between items-center gap-6 max-w-[500px]">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSectionIndex(section.id)}
            className={`flex-1 py-2 px-1 rounded-xl transition-all duration-300 ease-out cursor-pointer text-center
            ${
              currentSectionIndex === section.id
                ? "bg-white text-black font-semibold scale-105 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }
          `}
          >
            <div className="text-xs font-medium whitespace-nowrap">{sectionNameMap[section.name] || section.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SidebarMobile;
