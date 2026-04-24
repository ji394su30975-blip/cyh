"use client";

import Link from "next/link";
import Logo from "./logo";
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  UserButton 
} from "@clerk/nextjs";

// 注意這裡：這行 export default 是關鍵，絕對不能少！
export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/15 px-3 shadow-lg backdrop-blur-md border border-white/20">
          
          {/* 左側：品牌 Logo */}
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

            <li>
              <Link 
                href="/about" 
                className="text-xs sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-2"
              >
                品牌故事
              </Link>
            </li>
            
            <SignedOut>
              <li>
                <SignInButton mode="modal">
                  <button className="text-xs sm:text-sm font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-2">
                    會員登入
                  </button>
                </SignInButton>
              </li>
            </SignedOut>

            <SignedIn>
              <li className="flex items-center ml-2">
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 border border-[#5D4037]/20"
                    }
                  }}
                />
              </li>
            </SignedIn>

            <li>
              <a
                href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5D4037] text-white text-xs sm:text-sm shadow-md hover:bg-[#8D6E63] transition rounded-lg py-1.5 px-3 ml-1"
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