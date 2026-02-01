"use client";

import {EMAIL} from "@/src/store/constantStore";
import {useState} from "react";

function ContactSection() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      // 모던 브라우저용 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        // 레거시 방식
        const textArea = document.createElement("textarea");
        textArea.value = EMAIL;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="ContactSection"
      className="w-full h-screen
      bg-background flex sm:items-start items-center justify-center overflow-y-auto scrollbar-thin03"
    >
      {/* 실제 내용물 */}
      <div
        className="flex flex-col items-center justify-center flex-shrink-0 h-full
        w-[75vw] sm:w-[80vw] xl:w-[80vw] 2xl:max-w-[1400px] max-w-[1200px]
        min-w-[350px] sm:min-w-[400px]"
      >
        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-sm font-[400] text-gray-500 mb-8">{"연락 주셔서 감사합니다."}</h3>

          <button
            onClick={handleCopyEmail}
            className="group relative overflow-hidden button-shine-effect flex items-center space-x-3 px-8 pt-3 pb-4 shadow-xl
            transition-all duration-300 ease-out
            bg-teal-200 animate-gentle-bounce transition-all duration-300
            hover:bg-teal-300 rounded-xl cursor-pointer
            active:scale-95"
          >
            <div className="pt-1 relative z-10">
              {/* 이메일 아이콘 */}
              <svg
                className="w-4 h-4 text-teal-800 group-hover:text-teal-900 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            {/* 이메일 텍스트 */}
            <span className="text-base font-[400] text-teal-800 group-hover:text-teal-900 transition-colors duration-300 relative z-10">
              {EMAIL}
            </span>
          </button>

          {/* 복사 완료 메시지 */}
          <div
            className={`text-sm font-[400] text-teal-600 transition-all duration-300 
            ${showCopied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
          >
            ✓ 이메일이 복사되었습니다
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
