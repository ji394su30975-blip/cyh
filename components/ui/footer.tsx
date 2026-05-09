"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f6f2] border-t border-stone-200 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* 左側：品牌資訊 */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-widest">謙益行</div>
            <p className="text-stone-600 text-base leading-relaxed">
              傳承三峽老街的溫度，<br />
              堅持提供最純粹、低溫烘焙的優質堅果。
            </p>
          </div>

          {/* 中間：快速連結 */}
          <div>
            <h4 className="text-stone-900 font-bold text-lg mb-6">探索謙益行</h4>
            <ul className="space-y-3 text-stone-600">
              <li><Link href="/products" className="hover:text-[#00B900] transition">嚴選產品</Link></li>
              <li><Link href="/about" className="hover:text-[#00B900] transition">品牌故事</Link></li>
            </ul>
          </div>

          {/* 右側：客服與訂購 */}
          <div>
            <h4 className="text-stone-900 font-bold text-lg mb-6">客服與訂購</h4>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-center">
                <span className="mr-2 text-[#00B900]">💬</span>
                <a 
                  href="https://lin.ee/ZQW3R0N" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00B900] hover:underline font-bold"
                >
                  官方 LINE 客服
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>新北市三峽區民權街 86 號</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} 謙益行 QianYiHang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}