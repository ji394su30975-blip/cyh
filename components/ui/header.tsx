"use client";

import Link from "next/link";
import Logo from "./logo";
import { 
  UserButton, 
  SignInButton,
  ClerkLoading,
  ClerkLoaded,
  useUser 
} from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-2 z-30 w-full md:top-5 px-2">
      <div className="mx-auto max-w-6xl">
        {/* 調整左右內距 px-2 (手機版極限節省空間) */}
        <div className="relative flex h-14 items-center justify-between gap-1 rounded-2xl bg-white/20 px-2 sm:px-4 shadow-lg backdrop-blur-md border border-white/30">
          
          {/* 左側：Logo 區塊 */}
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          {/* 右側：選單區塊 - 使用 gap-1 讓按鈕靠攏 */}
          <ul className="flex items-center gap-1 sm:gap-4 overflow-x-hidden">
            <li>
              <Link href="/products" className="text-[11px] sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1">
                產品介紹
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[11px] sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1">
                品牌故事
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[11px] sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1">
                聯絡我們
              </Link>
            </li>

            <ClerkLoading>
              <li className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-stone-200/50 animate-pulse"></li>
            </ClerkLoading>

            <ClerkLoaded>
              {!isSignedIn ? (
                <li>
                  <SignInButton mode="modal">
                    <button className="text-[11px] sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1">
                      會員登入
                    </button>
                  </SignInButton>
                </li>
              ) : (
                <li className="flex items-center">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-7 h-7 sm:w-8 sm:h-8 border border-[#5D4037]/20 shadow-sm"
                      }
                    }}
                  />
                </li>
              )}
            </ClerkLoaded>

            {/* 立刻購買按鈕 - 加上 whitespace-nowrap 防止字體斷行 */}
            <li>
              <a
                href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5D4037] text-white text-[10px] sm:text-sm shadow-md hover:bg-[#8D6E63] transition rounded-lg py-1.5 px-2 sm:px-4 ml-1 whitespace-nowrap inline-block"
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