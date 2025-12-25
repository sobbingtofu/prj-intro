function MainSection() {
  return (
    <section
      id="MainSection"
      className="w-full h-screen min-h-[660px] max-h-[1800px] max-w-[3600px] min-w-[350px] bg-background flex justify-center items-center"
    >
      {/* 실제 내용물 */}
      <div
        className="md:w-[80%] w-[90%] flex
        sm:flex-row sm:justify-between sm:h-auto
        flex-col-reverse h-full justify-end
        border-red-500 border"
      >
        {/* 왼쪽 영역 */}
        <div
          className="border border-green-500 md:w-[80%] w-full
          flex flex-col items-start gap-y-4"
        >
          <div>
            {/* 키워드 */}
            <div className="flex md:gap-x-3 gap-x-1.5 md:mb-4 mb-2 cursor-default select-none">
              <p
                className="rounded-2xl bg-secondary px-3 py-1.5 
                md:text-sm text-[10px] font-semibold text-primary"
              >
                {"프론트엔드 개발"}
              </p>
              <p
                className="rounded-2xl bg-light-gray px-3 py-1.5 
                md:text-sm text-[10px] font-semibold text-gray-500 "
              >
                {"프로덕트 설계"}
              </p>
              <p
                className="rounded-2xl bg-light-gray px-3 py-1.5
                md:text-sm text-[10px] font-semibold text-gray-500 "
              >
                {"프로젝트 관리"}
              </p>
            </div>
            {/* 메인텍스트 */}
            <h1
              className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl
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
            className="w-full lg:text-md sm:text-sm text-xs 
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
          className="relative shrink-0 border border-blue-500 p-10
          sm:w-[25%] sm:h-auto sm:aspect-auto h-[60%] aspect-[9/16] w-auto"
        >
          {/* 추가그림자 */}
          <div className="absolute inset-9 translate-x-2 translate-y-3 rounded-[2rem] bg-primary/20 z-0"></div>

          {/* 실제 이미지 영역 */}
          <div
            className="
            relative overflow-hidden rounded-[2rem] bg-amber-300 shadow-xl
            h-full w-full z-10 "
            data-alt="Professional headshot of a developer against a clean background"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
