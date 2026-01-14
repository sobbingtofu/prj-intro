import {useEffect, useRef, useState} from "react";

interface useAnimateMyStoryCardProps {
  isSelected: boolean;
}

function useAnimateMyStoryCard({isSelected}: useAnimateMyStoryCardProps) {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isTitleCenter, setIsTitleCenter] = useState<boolean>(true);
  const showContentDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const moveTitleMoveDelayTimer = useRef<NodeJS.Timeout | null>(null);

  const canClickThisCardDelay = 1200; //ms
  const canClickThisCardDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const canClickThisCard = useRef<boolean>(true);

  useEffect(() => {
    if (showContentDelayTimer.current) {
      clearTimeout(showContentDelayTimer.current);
    }
    if (moveTitleMoveDelayTimer.current) {
      clearTimeout(moveTitleMoveDelayTimer.current);
    }

    if (isSelected) {
      moveTitleMoveDelayTimer.current = setTimeout(() => {
        setIsTitleCenter(false);
      }, 500);

      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(true);
      }, 900);

      canClickThisCardDelayTimer.current = setTimeout(() => {
        canClickThisCard.current = true;
      }, canClickThisCardDelay);
    } else {
      showContentDelayTimer.current = setTimeout(() => {
        setShowContent(false);
      }, 0);

      moveTitleMoveDelayTimer.current = setTimeout(() => {
        setIsTitleCenter(true);
      }, 300);

      canClickThisCardDelayTimer.current = setTimeout(() => {
        canClickThisCard.current = true;
      }, canClickThisCardDelay);
    }

    return () => {
      if (showContentDelayTimer.current) {
        clearTimeout(showContentDelayTimer.current);
        showContentDelayTimer.current = null;
      }
      if (moveTitleMoveDelayTimer.current) {
        clearTimeout(moveTitleMoveDelayTimer.current);
        moveTitleMoveDelayTimer.current = null;
      }
      if (canClickThisCardDelayTimer.current) {
        clearTimeout(canClickThisCardDelayTimer.current);
        canClickThisCardDelayTimer.current = null;
      }
    };
  }, [isSelected]);

  return {showContent, isTitleCenter};
}

export default useAnimateMyStoryCard;
