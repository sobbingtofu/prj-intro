"use client";

import {useMemo, useRef, useState} from "react";
import MainSection from "../sections/MainSection/MainSection";
import WorkExperienceSection from "../sections/WorkExperienceSection/WorkExperienceSection";
import {useApplyScrollEffect} from "../hooks/useApplyScrollEffect/useApplyScrollEffect";
import {SECTIONS} from "../store/constantStore";
import {useSwipeSection} from "../hooks/useApplySwipeEffect/useApplySwipeEffect";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const exceptionRefs = useMemo(() => [], []);

  const {offset} = useApplyScrollEffect({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: [SECTIONS[0], SECTIONS[1]].length,
    scrollThreshold: 7,
    resetDelay: 450,
    maxOffset: 30,
    exceptionContainerRefs: exceptionRefs,
  });

  useSwipeSection({
    currentSectionIndex,
    setCurrentSectionIndex,
    targetContainerRef: containerRef,
    totalSectionsCount: [SECTIONS[0], SECTIONS[1]].length,
    swipeThreshold: 50,
    velocityThreshold: 0.5,
    transitionDelay: 300,
    exceptionContainerRefs: exceptionRefs,
  });

  return (
    <div ref={containerRef} className="bg-black h-screen flex flex-row overflow-hidden">
      <div
        className="flex-1 min-w-0"
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
