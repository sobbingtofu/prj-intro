import {SECTIONS} from "@/src/store/constantStore";

interface SidebarDesktopProps {
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SidebarDesktop({currentSectionIndex, setCurrentSectionIndex}: SidebarDesktopProps) {
  const sectionNameMap: Record<string, string> = {
    main: "Overview",
    workExperience: "Work Experience",
    project: "Dev Projects",
    myStory: "My Story",
  };

  return (
    <div
      className="hidden sm:flex z-200 sm:w-[200px] sm:h-screen sm:sticky top-0 shrink-0
      bg-gradient-to-br from-gray-900 to-black justify-center items-center
      "
    >
      <div className="flex sm:flex-col h-[50%] sm:justify-between sm:items-start sm:px-6 ">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSectionIndex(section.id)}
            className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ease-out cursor-pointer text-right
            ${
              currentSectionIndex === section.id
                ? "bg-white text-black font-semibold scale-105 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-102"
            }
          `}
          >
            <div className="text-sm font-medium">{sectionNameMap[section.name] || section.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SidebarDesktop;
