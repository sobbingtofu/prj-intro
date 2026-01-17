import {projectType} from "@/src/store/constantStoreType";
import {RefObject, useLayoutEffect, useRef} from "react";

interface UseAnimatePrjAccordianProps {
  accordianCardsMapRef: RefObject<Map<string, HTMLDivElement>>;
  setSelectedCardId: (id: string | null) => void;
  orderedProjects: projectType[];
}

function useAnimatePrjAccordian({
  accordianCardsMapRef,
  setSelectedCardId,
  orderedProjects,
}: UseAnimatePrjAccordianProps) {
  /** 카드 위치 이동 트리거 시, 이동 전 카드들의 위치 정보를 저장 */
  const prevCardRectArr = useRef<Map<string, DOMRect>>(new Map());

  /** 카드 위치 이동 트리거 시, 이동 후 어떤 카드를 열어야 하는지 기록 */
  const cardToOpenIdRef = useRef<string | null>(null);

  const cardAnimationDuration = 300; // ms

  // 카드 클릭 시 orderedProjects가 변경되며 리렌더링 유발
  // 이 때 화면은 orderedProjects를 map시키므로, 카드는 바뀐 위치에 존재하는 상태로 리렌더링 될 수 밖에 없음
  // [ useLayoutEffect ] 통해 리렌더링 직전 이를 가로채서, 각 카드를 원래 위치로 강제 순간이동시킨 후
  // 카드가 있어야 하는 위치로 이동하는 듯한 애니메이션 구현 (FLIP 기법)
  useLayoutEffect(() => {
    if (prevCardRectArr.current.size === 0) {
      if (cardToOpenIdRef.current) {
        setSelectedCardId(cardToOpenIdRef.current);
        cardToOpenIdRef.current = null;
      }
      return;
    }

    const requiredDeltaYs: {accordianCardNode: HTMLDivElement; deltaY: number}[] = [];

    // Calculate position changes
    orderedProjects.forEach((prj) => {
      // 1. First - Last: 이전 위치 정보와 새로운 위치 정보 비교해 deltaY 계산 및 저장
      const prevCardRect = prevCardRectArr.current.get(prj.id);
      const accordianCardNode = accordianCardsMapRef.current.get(prj.id);
      if (accordianCardNode && prevCardRect) {
        const newCardRect = accordianCardNode.getBoundingClientRect();
        const deltaY = prevCardRect.top - newCardRect.top;
        if (deltaY !== 0) {
          requiredDeltaYs.push({accordianCardNode, deltaY});
        }
      }
    });

    if (requiredDeltaYs.length > 0) {
      // 2. Invert: 원래위치 - 새로운 위치 간 Y 좌표 차이를 활용해 새로운 위치에서 원래위치로 강제 순간이동시킴
      requiredDeltaYs.forEach(({accordianCardNode: domNode, deltaY}) => {
        domNode.style.transition = "none";
        domNode.style.transform = `translateY(${deltaY}px)`;
      });

      // 강제 순간이동 제대로 동작하는 것 보장
      void document.body.offsetHeight;

      // 3. Play: // 강제 순간이동된 상태에서, 원래 위치("" = 0)으로 이동 애니메이션 재생
      requiredDeltaYs.forEach(({accordianCardNode: domNode}) => {
        domNode.style.transition = `transform ${cardAnimationDuration}ms ease-in-out`;
        domNode.style.transform = "";
      });

      // 4. Clean-up: 애니메이션 소요시간 종료 후, 애니메이션 관련 스타일 제거 및 카드 열기 위한 상태 업데이트
      const timer = setTimeout(() => {
        requiredDeltaYs.forEach(({accordianCardNode: domNode}) => {
          domNode.style.transition = "";
          domNode.style.transform = "";
        });

        if (cardToOpenIdRef.current) {
          setSelectedCardId(cardToOpenIdRef.current);
          cardToOpenIdRef.current = null;
        }

        prevCardRectArr.current.clear();
      }, cardAnimationDuration);

      return () => clearTimeout(timer);
    } else {
      // 카드 이동 트리거되는게 없는 경우 (예: 맨 위의 카드 클릭)
      if (cardToOpenIdRef.current) {
        setSelectedCardId(cardToOpenIdRef.current);
        cardToOpenIdRef.current = null;
      }
      prevCardRectArr.current.clear();
    }
  }, [orderedProjects, accordianCardsMapRef, cardToOpenIdRef, prevCardRectArr, setSelectedCardId]);

  return {accordiansRef: accordianCardsMapRef, prevCardRectArr, cardToOpenIdRef};
}

export default useAnimatePrjAccordian;
