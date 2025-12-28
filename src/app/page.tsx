import SidebarDesktop from "../components/SidebarDesktop/SidebarDesktop";
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import MainSection from "../sections/MainSection/MainSection";
import SkillStackSection from "../sections/SkillStackSection/SkillStackSection";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-row overflow-hidden">
      {/* 데스크탑 용 사이드바 */}
      <SidebarDesktop />

      {/* 모바일 용 사이드바 */}
      <SidebarMobile />
      <div className="flex-1">
        <MainSection />
        <SkillStackSection />
      </div>
    </div>
  );
}
