export interface experienceMilestoneType {
  id: number;
  name: string;
  duration: string;
  keyword: string;
  role: string;
  summary: string;
  keyAchievements: {point: string; description: string; etc?: string}[];
  techStack?: string[];
  coreSkills?: string[];
}

export interface projectType {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: {
    point: string;
    content: string;
  }[];
  techStack: string[];
  links: {
    github: string;
    demo: string;
  };
  imageSrc?: string[];
  iconSrc?: string;
}

export interface myStoryType {
  id: number;
  keyWord: string;
  title: string;
  content: string;
}
