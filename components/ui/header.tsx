"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* 保持你原本的 relative flex h-14 結構 */}
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/15 px-3 shadow-lg backdrop-blur-md border border-white/20">
          
          {/* 左側：品牌 Logo (保留 flex-1 確保佔據左側) */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* 右側：導覽連結按鈕 */}
          <ul className="flex items-center gap-2 sm:gap-4">
            <li>
              <Link 
                href="/products" 
                className="text-xs sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-2"
              >
                產品介紹
              </Link>
            </li>

            {/* ✨ 唯獨新增這一塊：品牌故事 */}
            <li>
              <Link 
                href="/about" 
                className="text-xs sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-2"
              >
                品牌故事
              </Link>
            </li>
            
            <li>
              <Link 
                href="/contact" 
                className="text-xs sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-2"
              >
                聯絡我們
              </Link>
            </li>

            {/* 保留原本的「立刻購買」外連按鈕樣式 */}
            <li>
              <a
                href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5D4037] text-white text-xs sm:text-sm shadow-md hover:bg-[#8D6E63] transition rounded-lg py-1.5 px-3"
              >
                立刻購買
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
}
