import {create} from "zustand";
import {zustandStoreType} from "./zustandStoreType";
import {PROJECTS} from "./constantStore";

const zustandStore = create<zustandStoreType>((set) => ({
  selectedFlexCardId: null,
  setSelectedFlexCardId: (id) => set({selectedFlexCardId: id}),
  selectedAccordianCardId: null,
  setSelectedAccordianCardId: (id) => set({selectedAccordianCardId: id}),
  orderedProjects: PROJECTS,
  setOrderedProjects: (projects) =>
    set((state) => ({
      orderedProjects: typeof projects === "function" ? projects(state.orderedProjects) : projects,
    })),

  animateNavigation: false,
  setAnimateNavigation: (animate) => set({animateNavigation: animate}),
}));

export default zustandStore;
