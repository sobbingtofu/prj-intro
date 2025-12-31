import {useEffect, useRef, RefObject} from "react";

interface useSwipeSectionProps {
  currentSectionIndex: number; // 현재 위치한 섹션의 인덱스
  setCurrentSectionIndex: (index: number) => void; // 현재 위치한 섹션의 인덱스 설정 함수
  targetContainerRef: RefObject<HTMLElement | null>;
  totalSectionsCount: number;
  swipeThreshold?: number; // 섹션 전환을 위한 최소 스와이프 거리 (px)
  velocityThreshold?: number; // 빠른 스와이프 감지를 위한 속도 임계값 (px/ms)
  minSwipeDistance?: number; // 스와이프로 인식하기 위한 최소 이동 거리 (px)
  transitionDelay?: number; // 섹션 이동 후 대기 시간
  exceptionContainerRefs?: RefObject<HTMLElement | null>[];
}

export function useSwipeSection({
  currentSectionIndex,
  setCurrentSectionIndex,
  targetContainerRef,
  totalSectionsCount,
  swipeThreshold = 50,
  velocityThreshold = 0.5,
  minSwipeDistance = 80,
  transitionDelay = 300,
  exceptionContainerRefs = [],
}: useSwipeSectionProps) {
  const currentSectionIndexRef = useRef(currentSectionIndex);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  // 터치 시작/현재 위치 및 시간 저장
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchStartTimeRef = useRef<number>(0);
  const touchCurrentYRef = useRef<number>(0);

  const isTransitioningRef = useRef(false);
  const isSwipingRef = useRef(false);
  const isExceptionTargetRef = useRef(false);

  useEffect(() => {
    const isInExceptionContainer = (target: EventTarget | null): boolean => {
      if (!target || exceptionContainerRefs.length === 0) return false;
      return exceptionContainerRefs.some((ref) => ref.current && ref.current.contains(target as Node));
    };

    const container = targetContainerRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      // 예외 영역에서 발생한 터치인지 확인
      isExceptionTargetRef.current = isInExceptionContainer(e.target);

      if (isExceptionTargetRef.current || isTransitioningRef.current) {
        return;
      }

      const touch = e.touches[0];
      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;
      touchCurrentYRef.current = touch.clientY;
      touchStartTimeRef.current = Date.now();
      isSwipingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isExceptionTargetRef.current || isTransitioningRef.current) {
        return;
      }

      const touch = e.touches[0];
      touchCurrentYRef.current = touch.clientY;

      const deltaX = Math.abs(touch.clientX - touchStartXRef.current);
      const deltaY = Math.abs(touch.clientY - touchStartYRef.current);

      // 수직 이동이 수평 이동보다 크고, 최소 거리 이상 이동하면 스와이프로 인식
      if (!isSwipingRef.current && deltaY > deltaX && deltaY > minSwipeDistance) {
        isSwipingRef.current = true;
      }

      // 스와이프 중에는 기본 스크롤 동작 방지
      if (isSwipingRef.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (isExceptionTargetRef.current || isTransitioningRef.current || !isSwipingRef.current) {
        isSwipingRef.current = false;
        isExceptionTargetRef.current = false;
        return;
      }

      const deltaY = touchCurrentYRef.current - touchStartYRef.current;
      const deltaTime = Date.now() - touchStartTimeRef.current;
      const velocity = Math.abs(deltaY) / deltaTime;

      let direction = 0;
      const distanceCondition = Math.abs(deltaY) > swipeThreshold;
      const velocityCondition = velocity > velocityThreshold;

      // 스와이프인지 아닌지를 거리 + 속도 조합으로 판단
      if (distanceCondition && velocityCondition) {
        direction = deltaY > 0 ? -1 : 1;
      } else if (velocityCondition && Math.abs(deltaY) > minSwipeDistance * 2) {
        direction = deltaY > 0 ? -1 : 1;
      } else if (distanceCondition && velocity > velocityThreshold * 0.5) {
        direction = deltaY > 0 ? -1 : 1;
      }

      isSwipingRef.current = false;
      isExceptionTargetRef.current = false;

      if (direction === 0) {
        return;
      }

      const nextSection = currentSectionIndexRef.current + direction;

      if (nextSection < 0 || nextSection >= totalSectionsCount) {
        return;
      }

      isTransitioningRef.current = true;
      setCurrentSectionIndex(nextSection);

      // transition 완료 감지: transitionend 이벤트 우선, setTimeout은 fallback
      const transitionEndTimeout = setTimeout(() => {
        isTransitioningRef.current = false;
      }, transitionDelay + 50);

      const handleTransitionEnd = () => {
        clearTimeout(transitionEndTimeout);
        isTransitioningRef.current = false;
        container?.removeEventListener("transitionend", handleTransitionEnd);
      };

      container?.addEventListener("transitionend", handleTransitionEnd, {once: true});
    };

    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {passive: true});
      container.addEventListener("touchmove", handleTouchMove, {passive: false});
      container.addEventListener("touchend", handleTouchEnd, {passive: true});
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    setCurrentSectionIndex,
    totalSectionsCount,
    swipeThreshold,
    velocityThreshold,
    minSwipeDistance,
    transitionDelay,
    targetContainerRef,
    exceptionContainerRefs,
  ]);
}
