"use client";

import {useMemo, useRef, useState} from "react";
import SidebarDesktop from "../components/SidebarDesktop/SidebarDesktop";
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import {useApplyScrollEffect} from "../hooks/useApplyScrollEffect/useApplyScrollEffect";
import MainSection from "../sections/MainSection/MainSection";
import {SECTIONS} from "../store/constantStore";
import {useSwipeSection} from "../hooks/useApplySwipeEffect/useApplySwipeEffect";
import WorkExperienceSection from "../sections/WorkExperienceSection/WorkExperienceSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const exceptionRefs = useMemo(() => [], []);

  const {offset} = useApplyScrollEffect({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS.length,
    scrollThreshold: 7,
    resetDelay: 450,
    maxOffset: 30,
    exceptionContainerRefs: exceptionRefs,
  });

  useSwipeSection({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS.length,
    swipeThreshold: 50,
    velocityThreshold: 0.5,
    transitionDelay: 300,
    exceptionContainerRefs: [],
  });

  return (
    <div ref={containerRef} className="bg-black h-screen flex flex-row overflow-hidden">
      {/* 데스크탑 용 사이드바 */}
      <SidebarDesktop />

      {/* 모바일 용 사이드바 */}
      <SidebarMobile />
      <div
        className="flex-1"
        style={{
          transform: `translateY(calc(-${currentSectionIndex * 100}vh + ${offset}vh))`,
          transition: "transform 0.5s cubic-bezier(0, 0, 0.24, 1.01)",
        }}
      >
        <MainSection />
        <WorkExperienceSection />
      </div>
    </div>
  );
}
