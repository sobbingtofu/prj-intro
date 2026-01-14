import {MY_STORIES} from "./constantStore";

export const prjCardTextContainerRef = {current: null as HTMLDivElement | null};

export const prjAccordianCardTextContainerRef = {current: null as HTMLDivElement | null};

// MY_STORIES 배열 길이에 따라 동적으로 ref 배열 생성
export const myStoryBentoCardTextRefs: Array<{current: HTMLDivElement | null}> = Array.from(
  {length: MY_STORIES.length},
  () => ({current: null})
);

export const canClickPrjCard = {current: true};
