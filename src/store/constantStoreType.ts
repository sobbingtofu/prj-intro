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
