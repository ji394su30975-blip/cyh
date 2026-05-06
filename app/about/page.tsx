"use client";

import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 bg-stone-50 text-stone-900">
      <div className="max-w-3xl mx-auto px-8">
        
        {/* 開場白 */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-[#6B8E23] leading-tight mb-8">
            實話實說，<br />
            我想要賺你的錢。
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 font-medium">
            與其編織一堆虛假的品牌故事，<br />
            我更想老老實實地把這包堅果賣出去。
          </p>
        </section>

        {/* 核心理念 */}
        <div className="space-y-20">
          <section className="border-l-8 border-[#6B8E23] pl-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">為什麼選「謙益行」？</h2>
            <p className="text-lg md:text-xl leading-relaxed text-stone-600">
              因為這樣我才賺得到錢，<br />
              這是我最純粹的目的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">關於我的「目標」</h2>
            <p className="text-lg md:text-xl leading-relaxed text-stone-600">
              大家都說創業是為了夢想，<br />
              但我必須誠實跟你說，<br />
              我是為了賺錢。
            </p>
          </section>
        </div>

        {/* 底部按鈕 - 導向好賣家 */}
        <section className="mt-32 text-center border-t-2 border-stone-200 pt-20">
          <h2 className="text-3xl md:text-4xl font-black italic mb-12 uppercase tracking-tighter text-[#5D4037]">
            趕快去下單吧
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <a 
              href="https://famistore.famiport.com.tw/famistore/users/2523514/malls/010000000000000000993270" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#6B8E23] text-white text-2xl md:text-3xl font-black px-12 py-6 md:px-16 md:py-7 rounded-full hover:scale-105 transition-transform shadow-2xl inline-block"
            >
              立刻購買 🥜
            </a>
            <p className="text-stone-400 mt-4">夏威夷果、核桃、腰果、杏仁...通通買起來。</p>
          </div>
        </section>

      </div>
    </main>
  );
}