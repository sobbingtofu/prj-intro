import type {Metadata} from "next";

import "./globals.css";
import {notoSansKr} from "../Fonts/FontConfig";

const currentFont = notoSansKr;

export const metadata: Metadata = {
  title: "FE dev Kijoon Yun",
  description:
    "복잡한 비즈니스 요구사항을 직관적인 사용자 경험으로 구현하는 프론트엔드 개발자 윤기준의 소개 페이지입니다.",
  openGraph: {
    title: "FE dev Kijoon Yun",
    description:
      "복잡한 비즈니스 요구사항을 직관적인 사용자 경험으로 구현하는 프론트엔드 개발자 윤기준의 소개 페이지입니다.",
    images: [
      {
        url: "/img/square-cow-edited.png",
        width: 1200,
        height: 630,
        alt: "FE dev Kijoon Yun Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FE dev Kijoon Yun",
    description:
      "복잡한 비즈니스 요구사항을 직관적인 사용자 경험으로 구현하는 프론트엔드 개발자 윤기준의 소개 페이지입니다.",
    images: ["/img/square-cow-edited.png"],
  },
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
