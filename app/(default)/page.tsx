import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";

export const metadata = {
  title: "謙益行 | 三峽老街堅果專賣店 - 低溫烘焙、天然原味",
  description: "謙益行位於三峽老街，專售低溫烘焙、天然原味的優質堅果與果乾。提供全台配送，是您健康零食、過年禮盒的首選。",
};

export default function Home() {
  return (
    <>
      <PageIllustration />
      {/* 畫面現在只會剩下最漂亮的 Hero 區塊 */}
      <Hero />
    </>
  );
}
