import {RefObject, useEffect, useRef, useState} from "react";

interface useAnimateMainSectionProps {
  mainSectionRef: RefObject<HTMLDivElement>;
}

function useAnimateMainSection({mainSectionRef}: useAnimateMainSectionProps) {
  const [animateTextArea, setAnimateTextArea] = useState<boolean>(false);
  const [animateImageArea, setAnimateImageArea] = useState<boolean>(false);
  const [animateSkillStackArea, setAnimateSkillStackArea] = useState<boolean>(false);

  const imageAreaAnimateDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const skillStackAreaTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mainSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimateTextArea(true);
          }, 400);
        } else if (!entry.isIntersecting) {
          if (imageAreaAnimateDelayTimer.current) {
            clearTimeout(imageAreaAnimateDelayTimer.current);
            imageAreaAnimateDelayTimer.current = null;
          }
          if (skillStackAreaTimer.current) {
            clearTimeout(skillStackAreaTimer.current);
            skillStackAreaTimer.current = null;
          }
          setAnimateTextArea(false);
          setAnimateImageArea(false);
          setAnimateSkillStackArea(false);
        }
      },
      {
        threshold: [0.8],
      }
    );

    const currentSection = mainSectionRef.current;

    if (currentSection) {
      mainSectionObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        mainSectionObserver.unobserve(currentSection);
      }
    };
  }, [mainSectionRef]);

  useEffect(() => {
    if (animateTextArea) {
      imageAreaAnimateDelayTimer.current = setTimeout(() => {
        setAnimateImageArea(true);
      }, 150);
    } else {
      if (imageAreaAnimateDelayTimer.current) {
        clearTimeout(imageAreaAnimateDelayTimer.current);
        imageAreaAnimateDelayTimer.current = null;
      }
    }

    return () => {
      if (imageAreaAnimateDelayTimer.current) {
        clearTimeout(imageAreaAnimateDelayTimer.current);
        imageAreaAnimateDelayTimer.current = null;
      }
    };
  }, [animateTextArea]);

  useEffect(() => {
    if (animateImageArea) {
      skillStackAreaTimer.current = setTimeout(() => {
        setAnimateSkillStackArea(true);
      }, 350);
    }

    return () => {
      if (skillStackAreaTimer.current) {
        clearTimeout(skillStackAreaTimer.current);
        skillStackAreaTimer.current = null;
      }
    };
  }, [animateImageArea]);

  return {
    animateTextArea,
    animateImageArea,
    animateSkillStackArea,
  };
}

export default useAnimateMainSection;
