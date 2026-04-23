"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 💡 這裡不需要 import Footer，因為外層的 app/layout.tsx 已經幫你包好了

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []); 

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      {/* ✅ 這裡已經把原本會報錯的 <Footer /> 徹底刪除了 */}
    </>
  );
}
