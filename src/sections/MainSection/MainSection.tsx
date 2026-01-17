"use client";
import SkillStackCardContainer from "@/src/components/SkillStackCardContainer/SkillStackCardContainer";
import useAnimateMainSection from "@/src/hooks/useAnimateMainSection/useAnimateMainSection";
import {useRef} from "react";
import Image from "next/image";

function MainSection() {
  const mainSectionRef = useRef<HTMLDivElement>(null!);

  const {animateTextArea, animateImageArea, animateSkillStackArea} = useAnimateMainSection({mainSectionRef});

  return (
    <section ref={mainSectionRef} id="MainSection" className="w-full h-screen">
      <div
        className="h-full w-full max-w-[3600px] min-w-[350px]
        xl:pt-0 lg:pt-[60px] sm:pt-[100px] pt-[20px]
      bg-background flex flex-col xl:justify-center sm:justify-start justify-center items-center
        overflow-y-auto overflow-x-hidden"
      >
        {/* 소개 영역 */}
        <div className="md:w-[80%] w-[90%] flex flex-col sm:mt-0 mt-[1vh]">
          {/* 이미지 + 텍스트 영역 */}
          <div
            className="flex
            sm:flex-row sm:justify-between sm:h-auto
            flex-row-reverse h-auto justify-between sm:gap-4 gap-4
          "
          >
            {/* 텍스트 영역 */}
            <div
              className={`lg:w-[80%] sm:w-full w-[80%] flex flex-col items-start sm:gap-y-4 gap-y-2
              transition-all duration-700 ease-out
              ${animateTextArea ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div>
                {/* 키워드 */}
                <div className="sm:flex hidden lg:gap-x-3 gap-x-1.5 lg:mb-4 mb-2 cursor-default select-none">
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
                  className="xl:text-5xl lg:text-4xl sm:text-2xl text-[16px]
            text-[#030e18] font-[700] leading-tight tracking-tight"
                >
                  {"복잡한 비즈니스 요구사항을"}
                  <br />
                  {"직관적인 사용자 경험으로 구현하는"}
                  <br />
                  {"프로덕트 엔지니어, 윤기준입니다."}
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

              {/* 버튼 - sm 이상 */}
              <div className="sm:flex hidden flex-wrap gap-4 md:pt-4 pt-1 items-start select-none">
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
              className={`relative shrink-0
              sm:w-[25%] sm:h-auto sm:aspect-auto w-auto flex justify-center items-center
              transition-all duration-700 ease-out
              ${animateImageArea ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div
                className="sm:w-full w-auto sm:h-auto min-h-[110px] h-[16vh] max-w-[280px]
                sm:aspect-[3/4] aspect-[5/6] relative"
              >
                {/* 그림자 div */}
                <div className="absolute sm:block hidden rounded-[2rem] bg-secondary h-full w-full z-0 top-5 left-5"></div>
                {/* 실제 이미지 영역 */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl h-full w-full z-10">
                  <Image src="/img/me.jpg" alt="프로필" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 - sm 이하 */}
          <div
            className={`sm:hidden flex flex-wrap gap-2 mt-4 w-full justify-end select-none
          transition-all duration-700 ease-out
          ${animateTextArea ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <a
              className="flex items-center justify-center rounded-lg bg-primary
              px-2 py-2
              text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="#projects"
            >
              이력서 다운로드
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray
              px-2 py-2
              text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://github.com/sobbingtofu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="flex items-center justify-center rounded-lg bg-prime-gray
              px-2 py-2
              text-xs font-bold text-white
              transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              href="https://eevee-wiki.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              대표 프로젝트
            </a>
          </div>
        </div>

        {/* 기술 스택 영역 */}
        <SkillStackCardContainer animateSkillStackArea={animateSkillStackArea} />
      </div>
    </section>
  );
}

export default MainSection;
