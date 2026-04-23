import VideoThumb from "@/public/images/bg.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
     <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-25 pb-12 md:pt-32 md:pb-20">
            {/* 文字調整為白色、加粗、加上陰影以突出顯示 */}
            <div className="pb-12 text-center md:pb-20 text-white drop-shadow-lg">
              <h1 className="pb-5 font-nacelle text-5xl font-bold md:text-6xl" data-aos="fade-up"> {/* font-semibold 改 font-bold */}
                謙益行
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-2xl font-medium" data-aos="fade-up" data-aos-delay={200}> {/* 改為白色並輕微加粗 font-medium */}
                  三峽老街堅果專賣店
                </p>
                {/* 按鈕已經移到 Header，這裡保持乾淨 */}
              </div>
            </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="謙益行堅果封面"
            video="/videos/IMG_8167.MOV"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
