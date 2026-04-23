"use client";

import React from "react";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "門市地址",
      content: "新北市三峽區民權街 86 號 (三峽老街內)",
      icon: "📍",
      link: "https://www.google.com/maps/search/?api=1&query=新北市三峽區民權街86號",
    },
    {
      title: "聯絡電話",
      content: "0975707952",
      icon: "📞",
      link: "tel:0975707952",
    },
    {
      title: "營業時間",
      content: "週一至週日 10:00 - 18:00",
      icon: "⏰",
    },
    {
      title: "官方 LINE",
      content: "＠cyhnuts",
      icon: "💬",
      link: "https://lin.ee/ZQW3R0N", // 這裡之後記得換成真正的 LINE 連結
    },
  ];

  return (
    <main className="min-h-screen py-20 bg-stone-50">
      <h1 className="sr-only">聯絡謙益行 - 三峽老街堅果專賣店地址、電話、營業時間</h1>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#009944] tracking-tight">聯絡我們</h2>
          <p className="text-stone-500 mt-4 text-xl font-medium">不論是產品諮詢或大宗採購，歡迎與我們聯繫</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{info.title}</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">{info.content}</p>
              
              {info.link && (
                <a 
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#009944] font-bold hover:underline"
                >
                  點擊前往 →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#009944] rounded-[2.5rem] p-10 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">親自造訪門市</h3>
          <p className="opacity-90 mb-8 text-lg">
            在充滿歷史溫度的三峽老街，我們準備了最優質的堅果等待您的光臨。
          </p>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=新北市三峽區民權街86號"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#009944] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-colors"
          >
            開啟 Google 地圖導航
          </a>
        </div>
      </div>
    </main>
  );
}
