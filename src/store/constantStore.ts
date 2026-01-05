import MainSection from "../sections/MainSection/MainSection";
import SkillStackSection from "../sections/WorkExperienceSection/WorkExperienceSection";

export const SECTIONS = [
  {id: 0, component: MainSection},
  {id: 1, component: SkillStackSection},
];

export const SKILL_CARDS = [
  {
    title: "Modern Frontend",
    color: "bg-primary",
    items: [
      "React.js, Next.js (App Router)",
      "TypeScript, JavaScript (ES6+)",
      "Zustand, Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Systems",
    color: "bg-orange-500",
    items: ["Spring Boot (Java, JSP)", "MSSQL, SQL Query", "RESTful API Design", "System Architecture Design"],
  },
  {
    title: "Design & UI",
    color: "bg-purple-500",
    items: ["Figma", "UI/UX Design", "User Flow Design", "Prototyping & Wireframing"],
  },
  {
    title: "Product & Strategy",
    color: "bg-green-500",
    items: [
      "프로젝트 및 프로덕트 관리 (PM)",
      "요구사항 분석 및 기술 명세 정의",
      "PRD/기능설계서 작성",
      "WBS 기반 일정 및 리소스 관리",
    ],
  },
];
