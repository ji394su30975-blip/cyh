"use client";

export default function ProductsPage() {
  // --- 謙益行嚴選產品清單 (城武修改確認版) ---
  const products = [
    {
      id: 1,
      name: "夏威夷果",
      price: "650",
      image: "/products/macadamia.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/663b2060df7b4e4d87a014af",
    },
    {
      id: 2,
      name: "核桃",
      price: "400",
      image: "/products/walnut.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/02000000000000000099f383",
    },
    {
      id: 3,
      name: "腰果",
      price: "400",
      image: "/products/cashew.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/0200000000000000009c1621",
    },
    {
      id: 4,
      name: "杏仁",
      price: "350",
      image: "/products/almond.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/663dad08e1fea3baa6d09367",
    },
    {
      id: 5,
      name: "南瓜子",
      price: "280",
      image: "/products/pumpkinseeds.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/0200000000000000009dee3c",
    },
    {
      id: 6,
      name: "健康果仁",
      price: "250",
      image: "/products/mixbeans.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/020000000000000000a02f99",
    },
    {
      id: 7,
      name: "嚴選黑豆",
      price: "250",
      image: "/products/blackpink.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/663b1ea4a080454b7f2afb2e",
    },
    {
      id: 8,
      name: "綜合蔬菜",
      price: "200",
      image: "/products/mixvagetable2.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/69e091eb601756a54b19cc6f",
    },
    {
      id: 9,
      name: "綜合堅果",
      price: "400",
      image: "/products/mixnuts.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/0200000000000000009c1916",
    },
    {
      id: 10,
      name: "綜合蔬菜",
      price: "200",
      image: "/products/mixvagetable2.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/69e091eb601756a54b19cc6f",
    },
    {
      id: 11,
      name: "綜合蔬菜",
      price: "200",
      image: "/products/mixvagetable2.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/69e091eb601756a54b19cc6f",
    },
    {
      id: 12,
      name: "綜合蔬菜",
      price: "200",
      image: "/products/mixvagetable2.jpg",
      url: "https://famistore.famiport.com.tw/famistore/users/2523514/merchandises/69e091eb601756a54b19cc6f",
    },
  ];

  return (
    <main className="min-h-screen py-20 bg-stone-50">
      {/* SEO 隱藏標題 */}
      <h1 className="sr-only">謙益行嚴選堅果專賣：夏威夷果、核桃、腰果、杏仁、南瓜子、健康果仁、黑豆、綜合蔬菜</h1>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#009944] tracking-tight">嚴選產品</h2>
          <p className="text-stone-500 mt-4 text-xl font-medium">點擊產品圖片或按鈕，即可前往「好賣家」下單</p>
        </div>
        
        {/* 產品網格 */}
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col items-center p-4 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              
              {/* 圖片連結 */}
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <div className="aspect-video w-full overflow-hidden rounded-[1.8rem] bg-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/640x360?text=${product.name}`; }}
                  />
                </div>
              </a>

              {/* 文字內容 */}
              <div className="mt-6 text-center w-full">
                <h2 className="text-2xl font-bold text-stone-800">{product.name}</h2>
                <div className="mt-2 mb-6 bg-stone-100/50 py-1 px-4 rounded-full inline-block">
                  <span className="text-sm font-normal text-stone-400 mr-1">NT$</span>
                  <span className="text-[#009944] font-black text-2xl">{product.price}</span>
                </div>

                <div className="pt-2">
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block bg-[#009944] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#007a37] transition-all transform active:scale-95"
                  >
                    前往購買
                  </a>
                </div>
              </div>

              {/* 裝飾標籤 */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#009944] text-white text-xs px-3 py-1 rounded-full shadow-lg font-bold">嚴選</span>
              </div>
            </div>
          ))}
        </div>

        {/* 頁尾小叮嚀 */}
        <div className="mt-20 text-center text-stone-400 border-t border-stone-200 pt-8">
          <p>謙益行，與您一起品味天然原味</p>
        </div>
      </div>
    </main>
  );
}
