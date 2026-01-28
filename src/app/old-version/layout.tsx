import type {Metadata} from "next";

import "./../globals.css";
import {notoSansKr} from "@/src/Fonts/FontConfig";

const currentFont = notoSansKr;

export const metadata: Metadata = {
  title: "프로덕트 엔지니어 윤기준 소개 페이지",
  description:
    "복잡한 비즈니스 요구사항을 직관적인 사용자 경험으로 구현하는 프로덕트 엔지니어, 윤기준의 소개 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${currentFont.className} antialiased`}>{children}</body>
    </html>
  );
}
