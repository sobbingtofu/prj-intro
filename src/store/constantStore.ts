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
    name: "주식회사<br>스마트팩토리",
    duration: "(2024.08<br>~ 현재)",
    keyword: "기획부터 설계, 구현까지 제품의 전 생애 주기를 담당하는 개발자",
    role: "Software Engineer & Technical PM",
    summary: "솔루션 도입 전 과정(RFP 분석부터 설계, 개발, 교육)을 주도하며 고객사 비즈니스에 최적화된 시스템 구축",
    keyAchievements: [
      {
        point: "Technical PM",
        description:
          "고객사 RFP 분석을 통한 솔루션 제안서 작성 및 기능설계서 정의, WBS 기반의 일정 관리 및 프로젝트 리딩",
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
    name: "Nemo Partners<br>Strategy Consulting",
    duration: "(2023.07<br>~ 2023.12)",
    keyword: "데이터와 논리에 기반하여 복잡한 비즈니스 문제를 구조화하고 해결책을 제시하는 컨설턴트",
    role: "Business Strategy Consultant",
    summary: "대기업 및 중견기업 대상 경영 전략 수립 및 시장 분석을 통한 비즈니스 솔루션 도출",
    keyAchievements: [
      {
        point: "신사업 기획 및 사업 확장 전략 수립",
        description: "시장 동향 및 경쟁사, 기보유 역량 분석하여 신규 BM을 기획하고 구체적인 시장 진입 전략 도출",
      },
      {
        point: "M&A 및 IPO 대상 기업 CDD 수행",
        description:
          "기업 인수 및 상장을 위한 Commercial Due Diligence에 참여하여 사업타당성, 잠재성 및 리스크 정밀 분석",
      },
      {
        point: "프로젝트 RFP 분석 및 제안서 작성",
        description: "제안요청서(RFP) 및 시장 분석 통해 핵심 아젠다를 도출하고 논리적인 해결책을 제시하는 제안서 작성",
      },
      {
        point: "비즈니스 데이터 구조화 및 인사이트 도출",
        description:
          "산재된 정량적·정성적 데이터의 구조화 및 시각화 통해 의사결정을 위한 핵심 인사이트 도출 및 전략 보고서 작성",
      },
    ],
    coreSkills: ["Logical Structuring", "Problem Solving", "Data Analysis", "Strategy Formulation"],
  },
  {
    id: 3,
    name: "미래에셋<br>벤처투자",
    duration: "(2022.12<br>~ 2023.02)",
    keyword: "스타트업 시장환경 및 프로덕트 조사/분석 실무 수행",
    role: "Investment Research Assistant",
    summary: "기술 스타트업 투자 심사 보조 위한 스타트업 별 비즈니스 모델(BM) 및 시장 분석 통한 인사이트 도출",
    keyAchievements: [
      {
        point: "산업별 시장 동향 및 테크 트렌드 조사",
        description:
          "투자심사역의 의사결정에 필요한 특정 산업군의 시장 규모, 경쟁 구도 및 최신 기술 트렌드 심층 조사 수행",
      },
      {
        point: "스타트업 비즈니스 모델 및 서비스 분석",
        description:
          "검토 대상 기업의 BM, 사용자 지표 등 KPI, 수익 구조를 분석하고 서비스의 성장 잠재력과 제품 경쟁력을 정량적으로 평가",
      },
      {
        point: "투자 심사 보고서 작성 및 실사 지원",
        description:
          "투자 심사 위원회용 보고서 작성을 보조하고, 기업 실사 과정에서 필요한 데이터 검증 및 관련 정성 자료 정리",
      },
      {
        point: "투자 인사이트 도출 및 의사결정 프로세스 참여",
        description:
          "다양한 도메인의 서비스 분석을 통해 성공하는 프로덕트의 요건과 리스크 관리 방안을 학습하고 투자 인사이트 도출 과정 기여",
      },
    ],
    coreSkills: [
      "Industry & Tech Analysis",
      "Market Research",
      "Market-Centric Insight Generation",
      "Product Analysis",
    ],
  },
  {
    id: 4,
    name: "폭넓은<br>전문경험",
    duration: "",
    // duration: "(2018.12<br>~ 2022.11)",
    keyword: "다양한 도메인을 경험하며 유연한 소통 능력과 실행력을 축적",
    role: "Multidisciplinary Contributor",
    summary: "게임 개발, 프로덕트 분석 및 연구, 영상 편집, 콘텐츠 기획 등 다양한 실무 경험",
    keyAchievements: [
      {
        point: "연세대학교 졸업",
        description: "국제학부(UIC) - 기술경영(CTM), 정보디자인(IID) 복수전공",
      },
      {
        point: "센세이션 게임즈",
        description:
          "[PM, 게임 그래픽 디자이너] 연세대 동기들과 함께 소규모 게임개발 팀을 이뤄 Steam에 인디게임 'Soul After' 출시",
        etc: "https://store.steampowered.com/app/2148220/Soul_After/",
      },
      {
        point: "인천스케일업챌린지",
        description: "[조사 연구원] 프로덕트 UX 연구 및 육성 프로그램 운영 지원",
      },
      {
        point: "주식회사 이쿠얼키",
        description: "[콘텐츠팀 인턴] 교육 컨텐츠 제작 및 프로덕트 QA 업무 수행",
      },
      {
        point: "주식회사 BAEWUJA",
        description: "[영상 편집자] 교육 영상 컨텐츠 편집 및 후반 처리 작업 지원",
      },
      {
        point: "코스모스 악기",
        description: "[콘텐츠팀 인턴] 온/오프라인 마케팅 콘텐츠 제작 지원",
      },
    ],
  },
];
