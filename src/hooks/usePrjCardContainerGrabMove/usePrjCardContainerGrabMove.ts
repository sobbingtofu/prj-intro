import {useState} from "react";

interface UsePrjCardContainerGrabMoveProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

function usePrjCardContainerGrabMove({containerRef}: UsePrjCardContainerGrabMoveProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.userSelect = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
        containerRef.current.style.userSelect = "auto";
      }
    }
  };
  return {handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave};
}

export default usePrjCardContainerGrabMove;
