import {experienceMilestoneType} from "./constantStoreType";

export const SECTIONS = [
  {id: 0, name: "main"},
  {id: 1, name: "workExperience"},
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

export const MILESTONES: experienceMilestoneType[] = [
  {
    id: 1,
    name: "주식회사 스마트팩토리",
    duration: "(2024.08 ~ 현재)",
    keyword: "기획부터 설계, 구현까지 제품의 전 생애 주기를 담당하는 개발자",
    role: "Technical PM & Software Engineer",
    summary: "솔루션 도입 전 과정(RFP 분석부터 설계, 개발, 교육)을 주도하며 고객사 비즈니스에 최적화된 시스템 구축",
    keyAchievements: [
      {
        point: "Technical PM",
        description:
          "고객사 RFP 분석을 통한 솔루션 제안서 작성 및 기능설계서 정의. WBS 기반의 일정 관리로 프로젝트 리딩",
      },
      {
        point: "Solution Add-on 개발",
        description: "Spring Boot 기반으로 고객사 전용 추가 기능(Add-on), 커스텀 유저 플로우 및 API 개발",
      },
      {
        point: "UI/UX 및 시스템 고도화",
        description:
          "기존 JSP 기반 레거시 시스템의 사용자 편의성 증대를 목표로 하는 파일 시스템 및 UI/UX 등 업그레이드 개발 수행 ",
      },
      {
        point: "Full-Cycle 대응",
        description: "DB(MSSQL) 설계부터 백엔드 라우팅, 프론트엔드 UI 구현까지 엔드투엔드 개발 수행",
      },
    ],
    techStack: ["Spring Boot", "Java", "JSP", "MSSQL", "dhtmlx suite", "Figma"],
  },
  {
    id: 2,
    name: "Nemo Partners Strategy Consulting",
    duration: "(2023.07 ~ 2023.12)",
    keyword: "데이터와 논리에 기반하여 복잡한 비즈니스 문제를 구조화하고 해결책을 제시하는 컨설턴트",
    role: "Strategy Consultant",
    summary: "대기업 및 중견기업 대상 경영 전략 수립 및 시장 분석을 통한 비즈니스 솔루션 도출",
    keyAchievements: [
      {
        point: "비즈니스 로직 구조화",
        description: "복잡한 시장 상황과 기업의 요구사항을 분석하여 핵심 아젠다를 도출하고 실행 가능한 전략으로 구조화",
      },
      {
        point: "데이터 기반 의사결정",
        description: "정량적/정성적 데이터 분석을 통해 가설을 검증하고 논리적 근거에 기반한 해결책 제시",
      },
      {
        point: "전략적 커뮤니케이션",
        description: "다양한 이해관계자의 니즈를 조율하고 복잡한 개념을 시각화하여 전달하는 문서화 역량 확보",
      },
    ],
    coreSkills: ["Logical Thinking & Problem Solving", "Data Analysis", "Strategic Planning"],
  },
  {
    id: 3,
    name: "미래에셋벤처투자",
    duration: "(2022.12 ~ 2023.02)",
    keyword: "스타트업 시장환경 및 프로덕트 조사/분석 실무 수행",
    role: "Investment Analysis Assistant (인턴)",
    summary:
      "기술 스타트업 투자 심사 보조 위한 스타트업 별 비즈니스 모델(BM) 및 프로덕트 타당성 분석 통한 인사이트 도출",
    keyAchievements: [
      {
        point: "서비스 지표 분석",
        description: "B2C/B2B 테크 스타트업의 주요 KPI와 성장 지표 등 스타트업 및 프로덕트에 대한 정량적 분석 수행",
      },
      {
        point: "시장 분석 및 실사 보조",
        description: "산업별 시장 규모와 성장 잠재성 측정 및 경쟁사 대비 서비스 경쟁력 진단",
      },
      {
        point: "제품 지향적 시야 확보",
        description: "비즈니스의 지속 가능성과 사용자 가치를 동시에 고려하는 프로덕트 관점의 사고방식 확립",
      },
    ],
    coreSkills: ["Start-up", "Product Analysis", "Industry Trend"],
  },
  {
    id: 4,
    name: "기타 전문 경험",
    duration: "(2018.12 ~ 2022.11)",
    keyword: "다양한 도메인을 경험하며 유연한 소통 능력과 실행력을 축적",
    role: "Multidisciplinary Contributor",
    summary: "게임 개발, 프로덕트 분석 및 연구, 영상 편집, 콘텐츠 기획 등 다양한 실무 경험",
    keyAchievements: [
      {
        point: "센세이션 게임즈",
        description:
          "[PM, 게임 그래픽 디자이너] 연세대 동기들과 함께 소규모 게임개발 팀을 이뤄 Steam에 인디게임 'Soul After' 출시",
      },
      {
        point: "인천스케일업챌린지",
        description: "[조사 연구원] 스타트업 프로덕트 사용자 경험 연구 등 육성 프로그램 운영 지원",
      },
      {
        point: "주식회사 이쿠얼키",
        description: "[콘텐츠팀 인턴] 교육 컨텐츠 제작 지원 및 프로덕트 QA 보조 업무 수행",
      },
      {
        point: "주식회사 BAEWUJA",
        description: "[주니어 영상 편집자] 영상 콘텐츠 제작 위한 편집 및 후반 작업 지원",
      },
      {
        point: "코스모스 악기",
        description: "[콘텐츠팀 인턴] 온/오프라인 마케팅 콘텐츠 제작 지원",
      },
    ],
  },
];
