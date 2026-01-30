"use client";

import {useApplyScrollEffect} from "@/src/hooks/useApplyScrollEffect/useApplyScrollEffect";
import {useSwipeSection} from "@/src/hooks/useApplySwipeEffect/useApplySwipeEffect";
import {SECTIONS_OLD} from "@/src/store/constantStore";
import {
  myStoryAccordianCardTextRefs,
  myStoryBentoCardTextRefs,
  prjAccordianCardTextContainerRef,
  prjCardTextContainerRef,
} from "@/src/store/refStore";
import {useMemo, useRef, useState} from "react";
import SidebarDesktop from "./components/SidebarDesktop/SidebarDesktop";
import SidebarMobile from "./components/SidebarMobile/SidebarMobile";
import MainSection_old from "./sections/MainSection/MainSection_old";
import WorkExperienceSection_old from "./sections/WorkExperienceSection/WorkExperienceSection_old";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import MyStorySection from "./sections/MyStorySection/MyStorySection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const exceptionRefs = useMemo(
    () => [
      prjCardTextContainerRef,
      prjAccordianCardTextContainerRef,
      ...myStoryBentoCardTextRefs,
      ...myStoryAccordianCardTextRefs,
    ],
    [],
  );

  const {offset} = useApplyScrollEffect({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS_OLD.length,
    scrollThreshold: 7,
    resetDelay: 450,
    maxOffset: 30,
    exceptionContainerRefs: exceptionRefs,
  });

  useSwipeSection({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS_OLD.length,
    swipeThreshold: 50,
    velocityThreshold: 0.5,
    transitionDelay: 300,
    exceptionContainerRefs: exceptionRefs,
  });

  return (
    <div ref={containerRef} className="bg-black h-screen flex flex-row overflow-hidden">
      {/* 데스크탑 용 사이드바 */}
      <SidebarDesktop currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />

      {/* 모바일 용 사이드바 */}
      <SidebarMobile currentSectionIndex={currentSectionIndex} setCurrentSectionIndex={setCurrentSectionIndex} />
      <div
        className="flex-1 min-w-0"
        style={{
          transform: `translateY(calc(-${currentSectionIndex * 100}vh + ${offset}vh))`,
          transition: "transform 0.5s cubic-bezier(0, 0, 0.24, 1.01)",
        }}
      >
        <MainSection_old />
        <WorkExperienceSection_old />
        <ProjectSection />
        <MyStorySection />
      </div>
    </div>
  );
}
