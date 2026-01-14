import {RefObject, useEffect, useRef} from "react";

interface useAnimateMyStorySectionProps {
  animateMyStorySectionTitle: boolean;
  setAnimateMyStorySectionTitle: (value: boolean) => void;
  myStorySectionRef: RefObject<HTMLDivElement> | null;
  setAnimateMyStoryContentsAppearance: (value: boolean) => void;
  setSelectedCardId: (value: number) => void;
}

function useAnimateMyStorySection({
  animateMyStorySectionTitle,
  setAnimateMyStorySectionTitle,
  myStorySectionRef,
  setAnimateMyStoryContentsAppearance,
  setSelectedCardId,
}: useAnimateMyStorySectionProps) {
  const myStoryCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const myStorySectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setAnimateMyStorySectionTitle(true);
        } else if (entry.intersectionRatio <= 0) {
          if (myStoryCardAnimateDelayTimer.current) {
            clearTimeout(myStoryCardAnimateDelayTimer.current);
            myStoryCardAnimateDelayTimer.current = null;
          }
          setAnimateMyStorySectionTitle(false);
          setAnimateMyStoryContentsAppearance(false);
          setSelectedCardId(1);
        }
      },
      {
        threshold: [0, 0.8],
      }
    );

    const currentSection = myStorySectionRef?.current;

    if (currentSection) {
      myStorySectionObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        myStorySectionObserver.unobserve(currentSection);
      }
    };
  }, [
    myStorySectionRef,
    setAnimateMyStorySectionTitle,
    animateMyStorySectionTitle,
    setAnimateMyStoryContentsAppearance,
    setSelectedCardId,
  ]);

  useEffect(() => {
    if (animateMyStorySectionTitle) {
      myStoryCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimateMyStoryContentsAppearance(true);
      }, 500);
    } else {
      if (myStoryCardAnimateDelayTimer.current) {
        clearTimeout(myStoryCardAnimateDelayTimer.current);
        myStoryCardAnimateDelayTimer.current = null;
      }
    }

    return () => {
      if (myStoryCardAnimateDelayTimer.current) {
        clearTimeout(myStoryCardAnimateDelayTimer.current);
        myStoryCardAnimateDelayTimer.current = null;
      }
    };
  }, [animateMyStorySectionTitle, setAnimateMyStoryContentsAppearance]);

  return null;
}

export default useAnimateMyStorySection;
