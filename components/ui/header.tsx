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
        {/* 導航列容器：手機版固定 h-14，電腦版微調為 h-16 */}
        <div className="relative flex h-14 md:h-16 items-center justify-between gap-1 rounded-2xl bg-white/20 px-2 sm:px-6 shadow-lg backdrop-blur-md border border-white/30">
          
          {/* 左側：Logo */}
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          {/* 右側：選單區塊 */}
          <ul className="flex items-center gap-1 sm:gap-8">
            <li>
              <Link href="/products" className="text-[11px] md:text-[17px] font-semibold text-[#5D4037] hover:text-[#8D6E63] transition px-1 md:px-2">
                產品介紹
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[11px] md:text-[17px] font-semibold text-[#5D4037] hover:text-[#8D6E63] transition px-1 md:px-2">
                品牌故事
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[11px] md:text-[17px] font-semibold text-[#5D4037] hover:text-[#8D6E63] transition px-1 md:px-2">
                聯絡我們
              </Link>
            </li>

            <ClerkLoading>
              <li className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-stone-200/50 animate-pulse"></li>
            </ClerkLoading>

            <ClerkLoaded>
              {!isSignedIn ? (
                <li>
                  <SignInButton mode="modal">
                    <button className="text-[11px] md:text-[17px] font-semibold text-[#5D4037] hover:text-[#8D6E63] transition px-1 md:px-2">
                      會員登入
                    </button>
                  </SignInButton>
                </li>
              ) : (
                <li className="flex items-center">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-7 h-7 md:w-9 md:h-9 border border-[#5D4037]/20 shadow-sm"
                      }
                    }}
                  />
                </li>
              )}
            </ClerkLoaded>

            {/* 立刻購買按鈕：手機維持 text-[10px]，電腦恢復老闆要的大一點點 text-[17px] */}
            <li>
              <a
                href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6B8E23] text-white text-[10px] md:text-[17px] font-bold shadow-md hover:bg-[#55701C] transition rounded-lg py-1.5 px-2 md:py-2 md:px-6 ml-1 whitespace-nowrap inline-block"
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