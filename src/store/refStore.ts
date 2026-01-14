import {MY_STORIES} from "./constantStore";

export const prjCardTextContainerRef = {current: null as HTMLDivElement | null};

export const prjAccordianCardTextContainerRef = {current: null as HTMLDivElement | null};

export const myStoryBentoCardTextRefs: Array<{current: HTMLDivElement | null}> = Array.from(
  {length: MY_STORIES.length},
  () => ({current: null})
);

export const myStoryAccordianCardTextRefs: Array<{current: HTMLDivElement | null}> = Array.from(
  {length: MY_STORIES.length},
  () => ({current: null})
);

export const canClickPrjCard = {current: true};
