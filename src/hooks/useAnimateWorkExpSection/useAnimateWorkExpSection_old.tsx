import {RefObject, useEffect, useRef} from "react";

interface UseAnimateWorkExpSectionProps {
  animateTimeLine: boolean;
  setAnimateTimeLine: (value: boolean) => void;
  setAnimateWorkExpCard: (value: boolean) => void;
  setSelectedMilestoneId: (id: number) => void;
  sectionRef: RefObject<HTMLDivElement>;
}

function useAnimateWorkExpSection_old({
  animateTimeLine,
  setAnimateTimeLine,
  setSelectedMilestoneId,
  setAnimateWorkExpCard,
  sectionRef,
}: UseAnimateWorkExpSectionProps) {
  const workeExpCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const workExpSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setAnimateTimeLine(true);
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
    };
  }, [animateTimeLine, sectionRef, setAnimateTimeLine, setAnimateWorkExpCard, setSelectedMilestoneId]);

  useEffect(() => {
    if (animateTimeLine) {
      workeExpCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimateWorkExpCard(true);
      }, 2200);
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
  return null;
}

export default useAnimateWorkExpSection_old;
