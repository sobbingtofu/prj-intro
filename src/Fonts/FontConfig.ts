import {Nanum_Gothic, Noto_Sans_KR} from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "auto",
});

export const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "auto",
});
