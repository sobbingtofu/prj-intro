import {RefObject, useEffect, useRef} from "react";

interface useAnimatePrjSectionProps {
  animatePrjSectionTitle: boolean;
  setAnimatePrjSectionTitle: (value: boolean) => void;
  sectionRef: RefObject<HTMLDivElement> | null;

  setAnimatePrjSectionCardsLg: (value: boolean) => void;
}

function useAnimatePrjSection({
  animatePrjSectionTitle,
  setAnimatePrjSectionTitle,
  sectionRef,
  setAnimatePrjSectionCardsLg,
}: useAnimatePrjSectionProps) {
  const prjCardAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prjSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatePrjSectionTitle(true);
        } else if (!entry.isIntersecting) {
          if (prjCardAnimateDelayTimer.current) {
            clearTimeout(prjCardAnimateDelayTimer.current);
            prjCardAnimateDelayTimer.current = null;
          }
          setAnimatePrjSectionTitle(false);
          setAnimatePrjSectionCardsLg(false);
        }
      },
      {
        threshold: [0.8],
      }
    );

    const currentSection = sectionRef?.current;

    if (currentSection) {
      prjSectionObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        prjSectionObserver.unobserve(currentSection);
      }
    };
  }, [sectionRef, setAnimatePrjSectionTitle, animatePrjSectionTitle, setAnimatePrjSectionCardsLg]);

  useEffect(() => {
    if (animatePrjSectionTitle) {
      prjCardAnimateDelayTimer.current = setTimeout(() => {
        setAnimatePrjSectionCardsLg(true);
      }, 200);
    } else {
      if (prjCardAnimateDelayTimer.current) {
        clearTimeout(prjCardAnimateDelayTimer.current);
        prjCardAnimateDelayTimer.current = null;
      }
    }

    return () => {
      if (prjCardAnimateDelayTimer.current) {
        clearTimeout(prjCardAnimateDelayTimer.current);
        prjCardAnimateDelayTimer.current = null;
      }
    };
  }, [animatePrjSectionTitle, setAnimatePrjSectionCardsLg]);

  return null;
}

export default useAnimatePrjSection;
