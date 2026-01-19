import {experienceMilestoneType, myStoryType, projectType} from "./constantStoreType";

export const SECTIONS = [
  {id: 0, name: "main"},
  {id: 1, name: "workExperience"},
  {id: 2, name: "project"},
  {id: 3, name: "myStory"},
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
        description:
          "Spring Boot 기반 Process Asset Library 및 IT Service Management 솔루션의 추가 기능, 커스텀 유저 플로우 및 API 개발",
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
    coreSkills: ["Logical Structuring", "Problem Solving", "Strategy Formulation", "Data Analysis"],
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
          "다양한 도메인의 서비스 분석을 통해 프로덕트의 성공 요건과 리스크 관리 방안 등 투자 인사이트 도출 과정에 기여",
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
    name: "교육 및<br>전문경험",
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

export const PROJECTS: projectType[] = [
  {
    id: "eevee-wiki",
    title: "이브이 위키",
    tagline: "실전 포켓몬 트레이너를 위한 고성능 데이터 사전",
    description:
      "기존엔 없던 '특정 기술 조합을 배우는 포켓몬 검색'을 핵심 기능으로, 실전 포켓몬 배틀 유저에게 실질적인 가치를 제공하는 서비스입니다.",
    keyFeatures: [
      {
        point: "데이터 가공 및 파이프라인 구축",
        content:
          "PokeAPI의 방대한 Raw Data 수집 및 기능 구현에 최적화된 형태로의 가공·정규화 통한 데이터 활용도를 극대화",
      },
      {
        point: "고성능 클라이언트 캐싱",
        content: "IndexedDB 활용 통한 네트워크 비용 최소화 및 재방문 시 즉각적인 서비스 이용 가능 환경 구현",
      },
      {
        point: "동적 데이터 확장 및 크롤링",
        content: "Next.js API Route 및 Cheerio 활용해 이미지 데이터 실시간으로 보완하는 크롤링 파이프라인 구축",
      },
      {
        point: "기기 최적화 인터렉티브 UI",
        content: "데스크탑의 분할 화면(Split View)과 모바일의 바텀 시트 UI를 통해 기기별 최적화된 UI 레이아웃 구현",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tanstack Query", "IndexedDB"],
    links: {
      github: "https://github.com/sobbingtofu/prjPokeMoveWiki",
      demo: "https://eevee-wiki.vercel.app",
    },
    imageSrc: ["/img/eevee-wiki/01.JPG"],
    iconSrc: "/icon/icon-eevee-wiki.png",
  },
  {
    id: "run-pikachu",
    title: "Run Pikachu!",
    tagline: "React로 구현한 물리 기반 횡스크롤 러닝 액션 게임",
    description:
      "별도의 게임 엔진 없이 React의 상태관리 만으로 사실적인 게임 엔진을 구현하고 Supabase 기반 실시간 점수 공유 시스템을 구축했습니다.",
    keyFeatures: [
      {
        point: "상태관리 및 프리로딩",
        content:
          "더블 점프 및 장애물 생성 등 게임 물리 엔진 로직의 최적화 및 에셋 프리로딩을 통한 부드러운 플레이 보장",
      },
      {
        point: "실시간 충돌 감지 최적화",
        content:
          "실시간 장애물 좌표의 Map 객체 관리 통한 리렌더링 부하 절감 및 정밀한 히트박스 설계를 활용해 정밀한 충돌 판정 시스템 구축",
      },
      {
        point: "동적 난이도 조절 시스템",
        content: "가중치 기반 장애물 랜덤 생성 로직과 시간에 따른 가변 속도감을 통해 게임환경의 긴장감과 몰입감 증대",
      },
      {
        point: "Supabase 연동 랭킹 시스템",
        content: "Supabase 연동으로 플레이어 기록 실시간 공유 및 상위 랭커 스코어를 즉각 반영하는 시스템을 구현",
      },
    ],
    techStack: ["Vite(React)", "TypeScript", "Zustand", "Supabase"],
    links: {
      github: "https://github.com/sobbingtofu/runPikachu",
      demo: "https://run-pikachu.vercel.app/",
    },
    imageSrc: ["/img/run-pikachu/01.png"],
    iconSrc: "/icon/icon-run-pikachu.jpg",
  },
  {
    id: "mio-nana",
    title: "Cafe Mio & Nana",
    tagline: "브랜드 아이덴티티를 담은 인터랙티브 카페 소개 웹 어플리케이션",
    description:
      "매끄러운 섹션 전환과 다국어 지원, 지도 API 연동을 통해 카페의 브랜드 무드를 전달하고 카페 정보를 소개하는 인터랙티브 SPA입니다.",
    keyFeatures: [
      {
        point: "직관적인 섹션 내비게이션",
        content: "데스크탑의 스크롤 동작과 모바일의 스와이프 동작 등 접속 기기별 직관적인 섹션 전환 사용자 경험 구현",
      },
      {
        point: "전역 상태 관리 활용 기능",
        content: "Zustand를 통해 다국어 기능 및 메뉴 카테고리별 동적 필터링 기능 구현",
      },
      {
        point: "외부 API 및 편의 기능 연동",
        content: "카카오맵 연동을 통한 시각적 위치 정보 제공 및 주소 등 클립보드 복사 등 사용자 편의 기능 구현",
      },
      {
        point: "반응형 레이아웃 최적화",
        content:
          "Tailwind 활용해 다양한 해상도에서도 이미지 슬라이드쇼 및 지도 UI 등의 레이아웃과 브랜드 이미지가 왜곡 없이 일관되게 전달되도록 설계",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Zustand", "Kakao Map API"],
    links: {
      github: "https://github.com/sobbingtofu/prj-cafe-mionana",
      demo: "https://mionana.vercel.app/",
    },
    imageSrc: ["/img/cafe/01.png"],
    iconSrc: "/icon/icon-cafe-mionana.png",
  },
];

export const MY_STORIES: myStoryType[] = [
  {
    id: 1,
    keyWord: "Life-Changing Technology",
    title: "기술이 삶을 바꾸는 방식에 대하여",
    content:
      "저는 기술과 비즈니스의 결합이 인간의 삶을 크게 변화시키는 거대하고 본질적인 힘을 가졌다고 믿습니다. 고도화된 정보 통신 및 처리 기술을 기반으로 구현된 숏폼 비디오가 전 세대의 일상을 점유해버린 것처럼 말입니다.<br>하지만 이러한 변화가 '우리의 삶을 진정으로 풍요롭게 만들었는가'라는 본질적인 고민은 기술의 발전과 확산 속도에 비해 간과되어 왔다고 생각합니다.<br>바로 이 지점에서 저는 기술을 통해 사람들의 일상을 실질적으로 개선하고, 사람들의 일상에 **'실질적이고 긍정적인 임팩트'**를 줄 수 있는 제품을 만드는 데 기여하고 싶다는 갈증을 갖게 되었습니다.",
  },
  {
    id: 2,
    keyWord: "The Bridge",
    title: "거시적 관점에서 몰입의 영역으로",
    content:
      "실질적이고 긍정적인 임팩트를 줄 수 있는 프로덕트에 대한 갈증은 저를 새로운 기술을 다루는 비즈니스의 집합체인 벤처캐피탈(VC), 그리고 기업의 실질적인 생존과 성장 전략을 수립하는 전략 컨설팅의 세계로 이끌었으며, 그곳에서 저는 시장의 흐름을 읽는 법과 비즈니스 메커니즘을 체득하며 논리적 사고의 틀을 다졌습니다.<br>하지만 지표와 환경을 분석하는 일보다 저를 더 움직였던 것은, '이 기술이 구체적으로 사람들의 일상에 어떤 긍정적인 가치를 가져다주는가?'에 대한 물음이었습니다. 분석가로서 비즈니스에 제언하는 것을 넘어, **사람들의 손에 직접 닿는 가치를 설계하고 구현하고 싶다**는 확신이 들었습니다.",
  },
  {
    id: 3,
    keyWord: "Synthesis",
    title: "UX 디자인, 비즈니스 전략, 엔지니어링",
    content:
      "대학 시절 UX 디자인 전공과 다양한 콘텐츠팀 인턴 활동을 통해 쌓아온 '사용자 중심 사고', 그리고 컨설팅 현장에서 체득한 **'전략적 문제 해결 능력'**은 개발자로서 저의 가장 차별화된 핵심 역량이 되었습니다.<br>(주)스마트팩토리에서 비즈니스 솔루션 ITSM (IT Service Management)  및 PAL (Process Asset Library) 등의 도입 프로젝트를 리드하고, 확장 기능(Add-on) 개발 및 시스템 업그레이드를 직접 수행하며 복잡한 비즈니스 로직을 견고한 시스템으로 구현하는 실무 역량을 탄탄히 다졌습니다.<br>이제는 이러한 기술적 기반 위에, 사용자의 일상에 자연스럽게 스며들어 감동을 주는 인터페이스를 설계하고 구현하는 프로덕트 엔지니어가 되고자 합니다.",
  },
  {
    id: 4,
    keyWord: "Vision",
    title: "프로덕트 엔지니어로서의 지향점",
    content:
      "저는 개발 자체를 진심으로 즐기는 엔지니어이지만, 단순한 코드 작성을 넘어 그 코드가 사람들에게 제공하는 **'실질적인 가치'**까지도 관심을 갖고 있습니다. 비즈니스의 목표를 명확히 이해하고 현실적인 기술적 제약 안에서도 최선의 사용자 경험을 도출해 내는 **'프로덕트 엔지니어'**를 지향합니다.<br>사용자의 수요와 기술의 잠재 가치를 개발 요구사항으로 구체화하는 기획적 안목, 복잡한 문제를 명료하게 구조화하는 전략적 논리력, 그리고 이를 견고한 제품으로 형상화하는 엔지니어링 역량을 하나로 결합하겠습니다.단순히 기능이 동작하는 것을 넘어, 제가 만든 서비스가 사람들의 일상을 더 나은 방향으로 바꾸는 것이 제가 개발자로서 이루고 싶은 목표입니다.",
  },
];
