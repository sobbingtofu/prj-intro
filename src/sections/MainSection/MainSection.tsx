function MainSection() {
  return (
    <section
      id="MainSection"
      className="w-full h-screen max-h-[1800px] max-w-[3600px] min-w-[350px]
      sm:pt-0 pt-[60px]
    bg-background flex flex-col justify-center items-center overflow-y-auto"
    >
      {/* 실제 내용물 */}
      <div
        className="md:w-[80%] w-[90%] flex
        sm:flex-row sm:justify-between sm:h-auto
        flex-col-reverse h-full justify-center
        border-black border
        sm:gap-0 gap-8
        "
      >
        {/* 왼쪽 영역 */}
        <div
          className="border border-green-500 lg:w-[80%] w-full
          flex flex-col items-start gap-y-4"
        >
          <div>
            {/* 키워드 */}
            <div className="flex lg:gap-x-3 gap-x-1.5 lg:mb-4 mb-2 cursor-default select-none">
              <p
                className="rounded-2xl bg-secondary px-3 py-1.5 
                lg:text-sm text-[10px] font-semibold text-primary"
              >
                {"프론트엔드 개발"}
              </p>
              <p
                className="rounded-2xl bg-light-gray px-3 py-1.5 
                lg:text-sm text-[10px] font-semibold text-gray-500 "
              >
                {"프로덕트 설계"}
              </p>
              <p
                className="rounded-2xl bg-light-gray px-3 py-1.5
                lg:text-sm text-[10px] font-semibold text-gray-500 "
              >
                {"프로젝트 관리"}
              </p>
            </div>
            {/* 메인텍스트 */}
            <h1
              className="xl:text-5xl lg:text-4xl sm:text-2xl text-xl
            text-[#030e18] font-[700] leading-tight tracking-tight"
            >
              {"복잡한 비즈니스 요구사항을"}
              <br />
              {"직관적인 사용자 경험으로 구현하는"}
              <br />
              {"프론트엔드 개발자, 윤기준입니다."}
            </h1>
          </div>
          {/* 서브텍스트 */}
          <p
            className="w-full lg:text-[16px] sm:text-sm text-xs 
            font-[500] leading-relaxed text-gray-500"
          >
            {`요구사항 정의부터 아키텍처 설계와 구현, 프로젝트 관리까지 제품 개발의 전 과정을 참여하며,`}
            {<br className="md:block hidden" />}
            {` 데이터의 흐름과 사용자의 니즈를 동시에 고려한 최적의 인터페이스를 만드는 것을 즐깁니다.`}
          </p>

          {/* 버튼 */}
          <div className="flex flex-wrap gap-4 md:pt-4 pt:1 items-start select-none">
            <a
              className="flex items-center justify-center rounded-lg bg-primary
              md:px-5 md:py-3 px-2 py-2
              md:text-sm text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="#projects"
            >
              이력서 다운로드
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray
              md:px-5 md:py-3 px-2 py-2
              md:text-sm text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://github.com/sobbingtofu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray
              md:px-5 md:py-3 px-2 py-2
              md:text-sm text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://eevee-wiki.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              대표 프로젝트
            </a>
          </div>
        </div>

        {/* 이미지+그림자 영역 */}
        <div
          className="relative shrink-0 border border-blue-500
          sm:w-[25%] sm:h-auto sm:aspect-auto w-auto flex justify-center items-center"
        >
          <div className="sm:w-full w-auto sm:h-auto h-[200px] max-w-[210px] aspect-[3/4] relative border-red-500 border">
            {/* 그림자 div */}
            <div className="absolute rounded-[2rem] bg-secondary h-full w-full z-0 top-5 left-5"></div>
            {/* 실제 이미지 영역 */}
            <div
              className="relative overflow-hidden rounded-[2rem] bg-amber-300 shadow-xl 
              h-full w-full z-10"
            ></div>
          </div>
        </div>
      </div>

      <div
        className="md:w-[80%] w-[90%] flex
        flex-col justify-center
        border-black border
        mt-8"
      >
        <p className="w-full text-center font-[500] text-xl">Technical Skill Stack</p>
        <div className="w-full flex mt-6 justify-center gap-x-8">
          {/* <!-- Skill Card 1 --> */}
          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 text-lg font-bold text-text-main ">Modern Frontend</h3>
            <ul className="space-y-2 text-sm text-text-secondary text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {"React.js, Next.js (App Router)"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {"TypeScript, JavaScript (ES6+)"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {"Zustand, Redux Toolkit"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {"Tailwind CSS"}
              </li>
            </ul>
          </div>
          {/* <!-- Skill Card 2 --> */}
          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ">
            <h3 className="mb-3 text-lg font-bold text-text-main">Backend & Systems</h3>
            <ul className="space-y-2 text-sm text-text-secondary text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                {"Spring Boot (Java, JSP)"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                {"MSSQL, SQL Query"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                {"RESTful API Design"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                {"시스템 구조/워크플로우 설계"}
              </li>
            </ul>
          </div>
          {/* <!-- Skill Card 3 --> */}
          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ">
            <h3 className="mb-3 text-lg font-bold text-text-main">{"Design & UI"}</h3>
            <ul className="space-y-2 text-sm text-text-secondary text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                {"Figma"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                {"UI/UX Design"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                {"Prototyping & Wireframing"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                {"정보 구조 및 사용자 흐름 설계"}
              </li>
            </ul>
          </div>
          {/* <!-- Skill Card 4 --> */}
          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ">
            <h3 className="mb-3 text-lg font-bold text-text-main">{"Product & Strategy"}</h3>
            <ul className="space-y-2 text-sm text-text-secondary text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {"프로젝트 및 프로덕트 관리 (PM)"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {"요구사항 분석 및 기술 명세 정의"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {"PRD/기능설계서 작성"}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {"WBS 기반 일정 및 리소스 관리"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
