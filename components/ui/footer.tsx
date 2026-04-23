"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          
          {/* 1. 品牌區 */}
          <div className="col-span-2">
            <div className="mb-4">
              <Logo /> {/* 這裡會調用你純代碼的綠色 Logo */}
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              謙益行 ｜三峽老街堅果專賣店<br />
              堅持低溫烘焙，保留最純粹的天然營養。<br />
              把藝術都給殺了，商品做起來了。
            </p>
          </div>

          {/* 2. 快速連結 */}
          <div>
            <h4 className="text-white font-bold mb-6">快速連結</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#009944] transition">首頁</Link></li>
              <li><Link href="/products" className="hover:text-[#009944] transition">產品介紹</Link></li>
              <li><Link href="/about" className="hover:text-[#009944] transition">品牌故事</Link></li>
              <li><Link href="/contact" className="hover:text-[#009944] transition">聯絡我們</Link></li>
            </ul>
          </div>

          {/* 3. 顧客服務 */}
          <div>
            <h4 className="text-white font-bold mb-6">購買方式與客服</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270" 
                  target="_blank" 
                  className="hover:text-[#009944] transition"
                >
                  好賣家商城
                </a>
              </li>
              <li>
                <a href="https://line.me/R/ti/p/@yourid" target="_blank" className="hover:text-[#009944] transition">
                  官方 LINE 客服
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* 底部版權宣告 */}
        <div className="mt-16 pt-8 border-t border-stone-800 text-xs text-center text-stone-600">
          <p>© {new Date().getFullYear()} 謙益行 QianYiHang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
