import { NextResponse } from 'next/server';

export async function GET() {
  // 這裡就是後端的大腦，你可以去資料庫抓資料，或是做計算
  const data = {
    message: "哈囉城武老闆！這是謙益行的後端訊息",
    status: "穩定運行中",
    time: new Date().toISOString()
  };

  return NextResponse.json(data);
}