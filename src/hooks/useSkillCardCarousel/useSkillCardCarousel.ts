import {SKILL_CARDS_OLD} from "@/src/store/constantStore";
import {useRef, useState} from "react";

function useSkillCardCarousel() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // 왼쪽으로 스와이프 - 다음 카드
        setActiveCardIndex((prev) => (prev + 1) % SKILL_CARDS_OLD.length);
      } else {
        // 오른쪽으로 스와이프 - 이전 카드
        setActiveCardIndex((prev) => (prev - 1 + SKILL_CARDS_OLD.length) % SKILL_CARDS_OLD.length);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          setActiveCardIndex((prev) => (prev + 1) % SKILL_CARDS_OLD.length);
        } else {
          setActiveCardIndex((prev) => (prev - 1 + SKILL_CARDS_OLD.length) % SKILL_CARDS_OLD.length);
        }
      }
      isDragging.current = false;
    }
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeCardIndex;
    if (diff === 0) return "translate-x-0 scale-100 z-20 opacity-100";
    if (diff === 1 || diff === -(SKILL_CARDS_OLD.length - 1)) return "translate-x-[70%] scale-75 z-10 opacity-0";
    if (diff === -1 || diff === SKILL_CARDS_OLD.length - 1) return "-translate-x-[70%] scale-75 z-10 opacity-0";
    return "translate-x-[200%] scale-50 z-0 opacity-0";
  };
  return {
    activeCardIndex,
    setActiveCardIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    getCardPosition,
  };
}

export default useSkillCardCarousel;
