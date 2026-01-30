import SkillStackCardContainer from "@/src/components/SkillStackCardContainer/SkillStackCardContainer";
import Image from "next/image";

function MainSection() {
  return (
    <section id="MainSection" className="w-full h-screen overflow-auto bg-background flex items-center justify-center">
      <div className="flex-1">
        <div className="2xl:w-[1520px] xl:w-[1200px] w-full sm:h-[900px] h-[650px] mx-auto bg-background py-[35px] px-[50px]">
          {/* 서브텍스트 및 이미지 */}
          <div className="flex h-[200px] ml-auto justify-between items-start mr-[180px] w-[65%]">
            <div className="flex flex-col font-[400] text-base tracking-[-0.02em] leading-7 space-y-[-3px] ">
              <p>B2B 솔루션에서 요구사항 분석부터 기능 설계 및 개발,</p>
              <p>테스트 및 배포, 운영까지 전체 사이클을 경험했고,</p>
              <p>React와 Next.js 등 Modern FE 기술을 주도적으로</p>
              <p>연마해 실제 서비스를 배포하고 운영 중입니다.</p>
              <p className="font-[600]">비즈니스를 이해하고, 기술을 배우며, 문제를 해결해</p>
              <p className="font-[600]">프로덕트를 완성하는 개발자를 지향합니다.</p>
            </div>

            <div className="h-full sm:aspect-[3/4] aspect-[5/6] relative">
              <Image src="/img/meFinal.png" alt="프로필" fill className="object-cover" priority />
            </div>
          </div>
          {/* 헤더 텍스트 및 강조점 */}
          <div className="w-full flex items-end mt-[35px]">
            {/* 헤더 텍스트 */}
            <div
              className="flex flex-col items-end ml-auto w-[87%]
              text-[82px] tracking-[-0.02em] leading-[1.3] space-y-[-3px] font-[500]"
            >
              <h2>
                프로덕트의 <span className="font-[700]">시작</span>부터 <span className="font-[700]">끝</span>까지,
              </h2>
              <h2>
                최적의 해답을 <span className="font-[700]">고민</span>하고 <span className="font-[700]">구현</span>하는
              </h2>
              <h2 className="mr-[-28px]">
                프론트엔드 개발자 <span className="font-[700]">윤기준</span>입니다.
              </h2>
            </div>
            {/* 강조점 */}
            <div className="w-[120px] ml-[60px] aspect-square relative">
              <Image src="/img/star.png" alt="프로필" fill className="object-cover" priority />
            </div>
          </div>
          {/* 기술 카드 */}
          <div className="mt-[75px] ml-auto items-start mr-[180px] w-[65%]">
            <SkillStackCardContainer animateSkillStackArea={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
