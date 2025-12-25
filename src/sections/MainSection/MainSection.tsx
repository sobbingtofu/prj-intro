function MainSection() {
  return (
    <section
      id="MainSection"
      className="w-full h-screen min-h-[660px] max-h-[1800px] max-w-[3600px] min-w-[350px] bg-background flex justify-center"
    >
      {/* 실제 내용물 */}
      <div
        className="w-[80%] 
        flex flex-row items-center justify-between border-red-500 border"
      >
        {/* 왼쪽 영역 */}
        <div className="border border-green-500 w-full flex flex-col items-start gap-y-4">
          <div>
            {/* 키워드 */}
            <div className="flex gap-x-3 mb-4 cursor-default select-none">
              <p className="rounded-2xl bg-secondary px-3 py-1.5 text-sm font-semibold text-primary">
                {"프론트엔드 개발"}
              </p>
              <p className="rounded-2xl bg-light-gray px-3 py-1.5 text-sm font-semibold text-gray-500 ">
                {"프로덕트 설계"}
              </p>
              <p className="rounded-2xl bg-light-gray px-3 py-1.5 text-sm font-semibold text-gray-500 ">
                {"프로젝트 관리"}
              </p>
            </div>
            {/* 메인텍스트 */}
            <h1 className="text-5xl text-[#030e18] font-[700] leading-tight tracking-tight">
              {"복잡한 비즈니스 요구사항을"}
              <br />
              {"직관적인 사용자 경험으로 구현하는"}
              <br />
              {"프론트엔드 개발자, 윤기준입니다."}
            </h1>
          </div>
          {/* 서브텍스트 */}
          <p className="w-full text-md font-[500] leading-relaxed text-gray-500">
            요구사항 정의부터 아키텍처 설계와 구현, 프로젝트 관리까지 제품 개발의 전 과정을 참여하며
            <br />
            데이터의 흐름과 사용자의 니즈를 동시에 고려한 최적의 인터페이스를 만드는 것을 즐깁니다.
          </p>

          {/* 버튼 */}
          <div className="flex flex-wrap gap-4 pt-2 items-start mt-2 select-none">
            <a
              className="flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="#projects"
            >
              이력서 다운로드
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray px-5 py-3 text-sm font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://github.com/sobbingtofu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray px-5 py-3 text-sm font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://eevee-wiki.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              대표 프로젝트 - 이브이위키
            </a>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-primary/20"></div>
          <div
            className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-xl
            h-64 w-64 sm:h-80 sm:w-80 md:h-[360px] md:w-[320px]"
            data-alt="Professional headshot of a developer against a clean background"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
