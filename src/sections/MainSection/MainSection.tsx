"use client";

import SkillStackCardContainer from "@/src/components/SkillStackCardContainer/SkillStackCardContainer";
import SkillStackCardAccordian from "@/src/components/SkillStackCardContainer/SkillStackCardAccordian";
import Image from "next/image";
import useAnimateMainSection from "@/src/hooks/useAnimateMainSection/useAnimateMainSection";
import {mainSectionRef} from "@/src/store/refStore";
import useAnimateSpinningStar from "@/src/hooks/useAnimateSpinningStar/useAnimateSpinningStar";
import {useState} from "react";
import {createPortal} from "react-dom";
import ImageModal from "@/src/components/ImageModal/ImageModal";

function MainSection() {
  const {animateMainText, animateStarIcon, animateSubText, animateImage, animateSkillStackArea} = useAnimateMainSection(
    {mainSectionRef},
  );

  const {starRef, handleStarClick, handleMouseEnter, handleMouseLeave} = useAnimateSpinningStar();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      ref={mainSectionRef}
      id="MainSection"
      className="w-full h-screen overflow-auto bg-background flex items-start justify-center"
    >
      <div
        className="flex-1 h-full w-full bg-background 
        2xl:pt-[calc((100vh-830px)/2)] pt-[calc((100vh-780px)/2)] pb-[calc((100vh-780px)/2)]
        2xl:px-[calc((100vw-1520px-220px)/2)] px-[calc((100vw-1200px-220px)/2)]"
      >
        {/* 실제 내용물 컨테이너 : sm 이상 */}
        <div
          className="hidden sm:block
          2xl:w-[1520px] w-[1200px] h-[780px] bg-background
          2xl:pt-[20px] pt-[45px] pb-[35px] px-[50px]"
        >
          {/* 서브텍스트 및 이미지 */}
          <div
            className="flex ml-auto justify-between items-start 
            2xl:w-[65%] w-[70%] 2xl:mr-[180px] mr-[130px] 2xl:h-[180px] h-[160px]"
          >
            <div
              className={`flex flex-col 2xl:text-[15px] text-sm
              font-[400] tracking-[-0.02em] leading-[1.7] space-y-[-3px]
              transition-all duration-700 ease-out
              ${animateSubText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p>B2B 솔루션에서 요구사항 분석부터 기능 설계 및 개발,</p>
              <p>테스트 및 배포, 운영까지 전체 사이클을 경험했고,</p>
              <p>React와 Next.js 등 Modern FE 기술을 주도적으로</p>
              <p>연마해 실제 서비스를 배포해 운영 중입니다.</p>
              <p className="font-[600]">비즈니스를 이해하고, 기술을 배우며, 문제를 해결해</p>
              <p className="font-[600]">프로덕트를 완성하는 개발자를 지향합니다.</p>
            </div>

            <div
              onDoubleClick={() => setIsPopupOpen(true)}
              className={`h-full aspect-[3/4] relative 
              transition-all duration-700 ease-out hover:opacity-90
              ${animateImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            >
              <Image src="/img/meFinal.png" alt="프로필" fill className="object-cover" priority />
            </div>
          </div>
          {/* 헤더 텍스트 및 강조점 */}
          <div className="w-full flex items-end 2xl:mt-[25px] mt-[45px]">
            {/* 헤더 텍스트 */}
            <div
              className={`flex flex-col items-end ml-auto w-full
              2xl:text-[85px] text-[68px]
              tracking-[-0.02em] leading-[1.3] space-y-[-3px] font-[500]
              transition-all duration-700 ease-out
              ${animateMainText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2>
                프로덕트의 <span className="font-[700]">시작</span>부터 <span className="font-[700]">끝</span>까지,
              </h2>
              <h2>
                최적의 해답을 <span className="font-[700]">고민</span>하고 <span className="font-[700]">구현</span>하는
              </h2>
              <h2 className="2xl:mr-[-28px] mr-[-25px]">
                프론트엔드 개발자 <span className="font-[700]">윤기준</span>입니다.
              </h2>
            </div>
            {/* 강조점 */}
            <div
              ref={starRef}
              onClick={handleStarClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`2xl:w-[120px] 2xl:ml-[60px] w-[90px] ml-[40px]
              aspect-square relative
              transition-all duration-700 ease-out
              animate-spin-and-bounce
              hover:scale-102 cursor-pointer
              ${animateStarIcon ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <Image src="/img/star.png" alt="강조점" fill className="object-cover" priority />
            </div>
          </div>
          {/* 기술 카드 */}
          <div className="2xl:mt-[65px] mt-[75px] ml-auto items-start 2xl:mr-[180px] mr-[130px] 2xl:w-[65%] w-[70%]">
            <SkillStackCardContainer animateSkillStackArea={animateSkillStackArea} />
          </div>
        </div>
        {/* 실제 내용물 컨테이너 : sm 미만 */}
        <div
          className="block sm:hidden w-full h-full
          pt-[20px] pb-[35px] px-[10px]
          flex flex-col justify-center items-center overflow-y-auto"
        >
          {/* 소개 영역 */}
          <div className="w-[95%] flex flex-col items-end mt-[70px]">
            {/* 이미지 + 메인텍스트 영역 */}
            <div className="w-full flex justify-center items-end gap-4">
              {/* 텍스트 영역 */}
              <div
                className={`w-[242px] flex-1 flex flex-col items-start
                transition-all duration-700 ease-out
                ${animateMainText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                {/* 메인텍스트 */}
                <h1 className="text-[18px] text-[#030e18] font-[700] leading-[24px] tracking-tight text-right">
                  <span className="whitespace-nowrap">{"프로덕트의 시작부터 끝까지,"}</span>
                  <br />
                  <span className="whitespace-nowrap">{"최적의 해답을 고민하고 구현하는"}</span>
                  <br />
                  <span className="whitespace-nowrap">{"프론트엔드 개발자 윤기준입니다."}</span>
                </h1>
              </div>
              {/* 이미지 영역 */}
              <div
                className={`w-auto flex justify-center items-center
                transition-all duration-700 ease-out ml-[8px]
                ${animateImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-auto h-[16vh] min-h-[110px] aspect-[4/6] relative">
                  <div className="relative overflow-hidden shadow h-full w-full">
                    <Image src="/img/meFinal.png" alt="프로필" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
            {/* 서브텍스트 */}
            <div
              className={`text-[13px] font-[400] leading-relaxed text-gray-800 mt-10 w-[295px]
              transition-all duration-700 ease-out
              ${animateSubText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <p>B2B 솔루션에서 요구사항 분석부터 기능 설계 및 개발,</p>
              <p>테스트 및 배포, 운영까지 전체 사이클을 경험했고,</p>
              <p>React와 Next.js 등 Modern FE 기술을 주도적으로</p>
              <p>연마해 실제 서비스를 배포해 운영 중입니다.</p>
              <p className="font-[600]">비즈니스를 이해하고, 기술을 배우며, 문제를 해결해</p>
              <p className="font-[600]">프로덕트를 완성하는 개발자를 지향합니다.</p>
            </div>
          </div>

          {/* 기술 스택 영역 */}
          <SkillStackCardAccordian animateSkillStackArea={animateSkillStackArea} />
        </div>
      </div>

      {/* Easter Egg */}
      {isPopupOpen &&
        typeof window !== "undefined" &&
        createPortal(<ImageModal setIsPopupOpen={setIsPopupOpen} imgSrc="/img/square-cow.jpg" />, document.body)}
    </section>
  );
}

export default MainSection;
