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
    <header className="fixed top-2 z-30 w-full md:top-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 md:h-16 items-center justify-between gap-1 sm:gap-3 rounded-2xl bg-white/15 px-3 shadow-lg backdrop-blur-md border border-white/20">
          
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex items-center gap-0.5 sm:gap-4">
            <li>
              <Link href="/products" className="text-[11px] sm:text-sm md:text-base font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1.5 sm:px-2">
                產品介紹
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[11px] sm:text-sm md:text-base font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1.5 sm:px-2">
                品牌故事
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[11px] sm:text-sm md:text-base font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1.5 sm:px-2">
                聯絡我們
              </Link>
            </li>

            <ClerkLoading>
              <li className="w-8 h-8 rounded-full bg-stone-200/50 animate-pulse ml-1 sm:ml-2"></li>
            </ClerkLoading>

            <ClerkLoaded>
              {!isSignedIn ? (
                <li>
                  <SignInButton mode="modal">
                    <button className="text-[11px] sm:text-sm md:text-base font-medium text-[#5D4037] hover:text-[#8D6E63] transition px-1.5 sm:px-2">
                      會員登入
                    </button>
                  </SignInButton>
                </li>
              ) : (
                <li className="flex items-center ml-1 sm:ml-2">
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

            <li>
              <a
                href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6B8E23] text-white text-[10px] sm:text-xs md:text-base font-bold shadow-md hover:bg-[#55701C] transition rounded-lg py-1.5 px-2 sm:px-3 ml-1 whitespace-nowrap inline-block"
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