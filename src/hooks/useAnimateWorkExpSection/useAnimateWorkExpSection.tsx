import zustandStore from "@/src/store/zustandStore";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";

interface UseAnimateWorkExpSectionProps {
  sectionRef: {
    current: HTMLDivElement | null;
  };
  setSelectedMilestoneId: Dispatch<SetStateAction<number>>;
}

function useAnimateWorkExpSection({sectionRef, setSelectedMilestoneId}: UseAnimateWorkExpSectionProps) {
  const [animateTimeLine, setAnimateTimeLine] = useState<boolean>(false);
  const [animateWorkExpCard, setAnimateWorkExpCard] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const workeExpCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const navigationDelayTimer = useRef<NodeJS.Timeout | null>(null);

  const setAnimateNavigation = zustandStore((state) => state.setAnimateNavigation);
  const animateNavigation = zustandStore((state) => state.animateNavigation);

  useEffect(() => {
    const workExpSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setAnimateTimeLine(true);
          if (!animateNavigation) {
            navigationDelayTimer.current = setTimeout(() => {
              setAnimateNavigation(true);
            }, 300);
          }
        } else if (entry.intersectionRatio <= 0) {
          if (workeExpCardAnimateDelayTimer.current) {
            clearTimeout(workeExpCardAnimateDelayTimer.current);
            workeExpCardAnimateDelayTimer.current = null;
          }
          setAnimateTimeLine(false);
          setAnimateWorkExpCard(false);
          setSelectedMilestoneId(1);
        }
      },
      {
        threshold: [0, 0.8],
      },
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      workExpSectionObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        workExpSectionObserver.unobserve(currentSection);
      }
      if (navigationDelayTimer.current) {
        clearTimeout(navigationDelayTimer.current);
        navigationDelayTimer.current = null;
      }
    };
  }, [
    animateTimeLine,
    sectionRef,
    setAnimateTimeLine,
    setAnimateWorkExpCard,
    setSelectedMilestoneId,
    setAnimateNavigation,
    animateNavigation,
  ]);

  useEffect(() => {
    if (animateTimeLine) {
      workeExpCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimateWorkExpCard(true);
      }, 1800);
    } else {
      if (workeExpCardAnimateDelayTimer.current) {
        clearTimeout(workeExpCardAnimateDelayTimer.current);
        workeExpCardAnimateDelayTimer.current = null;
      }
    }

    return () => {
      if (workeExpCardAnimateDelayTimer.current) {
        clearTimeout(workeExpCardAnimateDelayTimer.current);
        workeExpCardAnimateDelayTimer.current = null;
      }
    };
  }, [animateTimeLine, setAnimateWorkExpCard]);
  return {
    setSelectedMilestoneId,
    animateTimeLine,
    setAnimateTimeLine,
    animateWorkExpCard,
    setAnimateWorkExpCard,
    isTransitioning,
    setIsTransitioning,
  };
}

export default useAnimateWorkExpSection;
