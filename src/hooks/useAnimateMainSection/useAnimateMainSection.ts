import zustandStore from "@/src/store/zustandStore";
import {useEffect, useRef, useState} from "react";

interface useAnimateMainSectionProps {
  mainSectionRef: {
    current: HTMLDivElement | null;
  };
}

function useAnimateMainSection({mainSectionRef}: useAnimateMainSectionProps) {
  const [animateMainText, setAnimateMainText] = useState<boolean>(false);
  const [animateStarIcon, setAnimateStarIcon] = useState<boolean>(false);
  const [animateSubText, setAnimateSubText] = useState<boolean>(false);
  const [animateImage, setAnimateImage] = useState<boolean>(false);
  const [animateSkillStackArea, setAnimateSkillStackArea] = useState<boolean>(false);
  const [animateArrowDown, setAnimateArrowDown] = useState<boolean>(false);

  const setAnimateNavigation = zustandStore((state) => state.setAnimateNavigation);

  const starIconTimer = useRef<NodeJS.Timeout | null>(null);
  const subTextTimer = useRef<NodeJS.Timeout | null>(null);
  const imageTimer = useRef<NodeJS.Timeout | null>(null);
  const skillStackAreaTimer = useRef<NodeJS.Timeout | null>(null);
  const arrowDownTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mainSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setAnimateNavigation(false);

          setTimeout(() => {
            /*
            [ 애니메이션 1 ]
            trigger: 메인 섹션이 뷰포트에 80% 이상 보인 후 200ms 경과
            action: 헤더 텍스트 등장
            **/
            setAnimateMainText(true);
          }, 200);
        } else if (entry.intersectionRatio < 0.7) {
          setAnimateArrowDown(false);
        }

        if (entry.intersectionRatio <= 0) {
          // 모든 타이머 청소
          if (starIconTimer.current) {
            clearTimeout(starIconTimer.current);
            starIconTimer.current = null;
          }
          if (subTextTimer.current) {
            clearTimeout(subTextTimer.current);
            subTextTimer.current = null;
          }
          if (imageTimer.current) {
            clearTimeout(imageTimer.current);
            imageTimer.current = null;
          }
          if (skillStackAreaTimer.current) {
            clearTimeout(skillStackAreaTimer.current);
            skillStackAreaTimer.current = null;
          }
          if (arrowDownTimer.current) {
            clearTimeout(arrowDownTimer.current);
            arrowDownTimer.current = null;
          }
          // 모든 상태 초기화
          setAnimateMainText(false);
          setAnimateStarIcon(false);
          setAnimateSubText(false);
          setAnimateImage(false);
          setAnimateSkillStackArea(false);
        }
      },
      {
        threshold: [0, 0.8],
      },
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
  }, [mainSectionRef, setAnimateNavigation]);

  useEffect(() => {
    if (animateMainText) {
      starIconTimer.current = setTimeout(() => {
        /*
        [ 애니메이션 2 ]
        trigger: 헤더텍스트 등장 시작된 후 200ms 경과
        action: 강조점 등장
        **/
        setAnimateStarIcon(true);
      }, 200);
    } else {
      if (starIconTimer.current) {
        clearTimeout(starIconTimer.current);
        starIconTimer.current = null;
      }
    }

    return () => {
      if (starIconTimer.current) {
        clearTimeout(starIconTimer.current);
        starIconTimer.current = null;
      }
    };
  }, [animateMainText]);

  useEffect(() => {
    if (animateMainText) {
      subTextTimer.current = setTimeout(() => {
        /*
        [ 애니메이션 3 ]
        trigger: 헤더텍스트 등장 시작된 후 400ms 경과
        action: 서브텍스트 등장
        **/
        setAnimateSubText(true);
      }, 400);

      if (animateMainText) {
        imageTimer.current = setTimeout(() => {
          /*
          [ 애니메이션 4 ]
          trigger: 헤더텍스트 등장 시작된 후 480ms 경과
          action: 이미지 등장
          **/
          setAnimateImage(true);
        }, 480);
      }
    } else {
      if (subTextTimer.current) {
        clearTimeout(subTextTimer.current);
        subTextTimer.current = null;
      }
    }

    return () => {
      if (subTextTimer.current) {
        clearTimeout(subTextTimer.current);
        subTextTimer.current = null;
      }
      if (imageTimer.current) {
        clearTimeout(imageTimer.current);
        imageTimer.current = null;
      }
    };
  }, [animateMainText]);

  useEffect(() => {
    if (animateSubText && animateImage) {
      skillStackAreaTimer.current = setTimeout(() => {
        /*
        [ 애니메이션 5 ]
        trigger: 헤더텍스트 등장 시작된 후 500ms 경과
        action: 스킬 스택 영역 등장
        **/
        setAnimateSkillStackArea(true);
      }, 350);
    }

    return () => {
      if (skillStackAreaTimer.current) {
        clearTimeout(skillStackAreaTimer.current);
        skillStackAreaTimer.current = null;
      }
    };
  }, [animateSubText, animateImage]);

  useEffect(() => {
    if (animateSkillStackArea) {
      arrowDownTimer.current = setTimeout(() => {
        /*
        [ 애니메이션 6 ]
        trigger: 스킬 스택 영역 등장 시작된 후 100ms 경과
        action: 화살표 등장
        **/
        setAnimateArrowDown(true);
      }, 100);
    } else {
      if (arrowDownTimer.current) {
        clearTimeout(arrowDownTimer.current);
        arrowDownTimer.current = null;
      }
    }

    return () => {
      if (arrowDownTimer.current) {
        clearTimeout(arrowDownTimer.current);
        arrowDownTimer.current = null;
      }
    };
  }, [animateSkillStackArea]);

  return {
    animateMainText,
    animateStarIcon,
    animateSubText,
    animateImage,
    animateSkillStackArea,
    animateArrowDown,
  };
}

export default useAnimateMainSection;
