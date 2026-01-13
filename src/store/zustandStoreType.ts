import {projectType} from "./constantStoreType";

export interface zustandStoreType {
  selectedFlexCardId: string | null;
  setSelectedFlexCardId: (id: string | null) => void;
  selectedAccordianCardId: string | null;
  setSelectedAccordianCardId: (id: string | null) => void;
  orderedProjects: projectType[];
  setOrderedProjects: (projects: projectType[] | ((prev: projectType[]) => projectType[])) => void;
}
