import { ClerkProvider } from '@clerk/nextjs' // 1. 引入 Clerk 零件
import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    { path: "../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "謙益行 QianYiHang | 三峽老街堅果專賣店 - 低溫烘焙、天然原味",
  description: "謙益行座落於三峽老街，嚴選高品質夏威夷果、腰果、核桃及綜合堅果。堅持純粹原味、低溫烘焙，為您保留最天然的營養。",
  keywords: "三峽老街堅果, 謙益行, 夏威夷果, 養生堅果, 低溫烘焙堅果, 腰果推薦, 健康零食, 堅果專賣店",
  openGraph: {
    title: "謙益行 | 三峽老街嚴選堅果專賣",
    description: "傳承三峽老街溫度，提供最純粹、低溫烘焙的優質堅果。直接下單，快速到貨！",
    type: "website",
    locale: "zh_TW",
    siteName: "謙益行 QianYiHang",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. 用 ClerkProvider 包裹整個網站
    <ClerkProvider>
      <html lang="zh-TW" className="scroll-smooth">
        <body
          className={`${inter.variable} ${nacelle.variable} bg-[#faf8f0] font-inter text-base text-stone-900 antialiased`}
        >
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}