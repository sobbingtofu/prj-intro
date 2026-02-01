import {useRef, useState} from "react";

function useAnimateSpinningStar() {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const starRef = useRef<HTMLDivElement>(null);

  // 애니메이션 속도 업데이트
  const updateAnimationSpeed = (playbackRate: number) => {
    if (starRef.current) {
      const animations = starRef.current.getAnimations();
      console.log("애니메이션 개수:", animations.length, "목표 속도:", playbackRate);
      if (animations.length > 0) {
        animations.forEach((animation) => {
          animation.playbackRate = playbackRate;
          console.log("애니메이션 속도 변경됨:", animation.playbackRate);
        });
      }
    }
  };

  const handleStarClick = () => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    setIsStarClicked(true);
    updateAnimationSpeed(30);
    clickTimerRef.current = setTimeout(() => {
      setIsStarClicked(false);
      updateAnimationSpeed(1);
    }, 1500);
  };

  const handleMouseEnter = () => {
    if (!isStarClicked) {
      updateAnimationSpeed(3);
    }
  };

  const handleMouseLeave = () => {
    setIsStarClicked(false);
    if (!isStarClicked) {
      updateAnimationSpeed(1);
    }
  };

  return {
    starRef,
    handleStarClick,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export default useAnimateSpinningStar;
