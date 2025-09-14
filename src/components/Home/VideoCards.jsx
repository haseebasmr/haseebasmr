import { Swiper, SwiperSlide } from "swiper/react";
import Shuffle from "../Common/Shuffle";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Mousewheel,
  Navigation,
} from "swiper/modules";

import "../../styles/swiperVideo.css";
import slide_video_1 from "/assets/videos/Promotion/thumbnail.mp4";
import slide_video_2 from "/assets/videos/Nature/Thumbnail.mp4";
import slide_video_3 from "/assets/videos/ASMR/thumbnail.mp4";
import slide_video_4 from "/assets/videos/CookingASMR/thumbnail.mp4";

function VideoCards() {
  return (
    <div className="w-screen bg-pallet4 py-20">
      <div className="text-center py-10">
        <Shuffle
          text="Videos"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop={true}
          loopDelay={1}
          className="md:text-6xl text-2xl font-medium md:font-bold"
        />
      </div>
      <div className="container md:px-4 px-0 mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          mousewheel={{
            forceToAxis: true,
            realaseOnEdges: true,
            sensitivity: 0.1,
            thresholdDelta: 1,
            thresholdTime: 1000,
          }}
          breakpoints={{
            // Adjust slidesPerView based on screen width
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          speed={800}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiperVideo"
        >
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_1}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              Promotion
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_2}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              Nature
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_3}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              ASMR
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_4}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              Cooking ASMR
            </div>
          </SwiperSlide>

          <div className="swiper-button-prev cursor-pointer bg-pallet3 p-10 rounded-full text-white hidden md:flex"></div>
          <div className="swiper-button-next cursor-pointer bg-pallet3 p-10 rounded-full text-white hidden md:flex"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default VideoCards;
