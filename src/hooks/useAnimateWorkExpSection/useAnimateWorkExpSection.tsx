import {RefObject, useEffect, useRef} from "react";

interface UseAnimateWorkExpSectionProps {
  animateTimeLine: boolean;
  setAnimateTimeLine: (value: boolean) => void;
  setAnimateWorkExpCard: (value: boolean) => void;
  setSelectedMilestoneId: (id: number) => void;
  sectionRef: RefObject<HTMLDivElement>;
}

function useAnimateWorkExpSection({
  animateTimeLine,
  setAnimateTimeLine,
  setSelectedMilestoneId,
  setAnimateWorkExpCard,
  sectionRef,
}: UseAnimateWorkExpSectionProps) {
  const workeExpCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && !animateTimeLine) {
          if (animateTimeLine) {
            setAnimateTimeLine(false);
          }
          setAnimateTimeLine(true);
        } else if (!entry.isIntersecting && entry.intersectionRatio === 0 && animateTimeLine) {
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
        threshold: [0, 0.9],
      }
    );

    const currentElement = sectionRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animateTimeLine, sectionRef, setAnimateTimeLine, setAnimateWorkExpCard, setSelectedMilestoneId]);

  useEffect(() => {
    if (animateTimeLine) {
      workeExpCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimateWorkExpCard(true);
      }, 1400);
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

export default useAnimateWorkExpSection;
