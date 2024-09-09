import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperVideo.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/modules";

import slide_video_1 from "/assets/videos/1.mp4";
import slide_video_2 from "/assets/videos/2.mp4";
import slide_video_3 from "/assets/videos/3.mp4";
import slide_video_4 from "/assets/videos/4.mp4";
import { useNavigate } from "react-router-dom";

function VideoCards() {
  const swiperRef = useRef(null);
  /*
    const handleSlideChange = () => {
      const swiper = swiperRef.current;
      if (!swiper) return;
      swiper.slides?.forEach((slide, index) => {
        const video = slide.querySelector("video");
        if (video) {
          if (index === swiper.activeIndex) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reset the video to the beginning
          }
        }
      });
    };
  
    useEffect(() => {
      const swiper = swiperRef.current;
      if (swiper) {
        handleSlideChange(); // Ensure the first video plays on initial load
      }
    }, []);
  
  */
  const navigate = useNavigate();

  return (
    <div className="bg-pallet4 pb-28" id="videos">
      <div className="container md:px-4 px-0 mx-auto">
        <div className="md:text-5xl  text-4xl font-medium text-center py-10">
          Video Categories
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          mousewheel={{
            forceToAxis: true,
          }}
          ref={swiperRef}
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
        //onSlideChange={handleSlideChange}
        >
          <SwiperSlide onClick={() => navigate("promotionvideo")}>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_3}
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent"></div>
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              Promotion
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("naturevideo")}>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_4}
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent"></div>
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              Nature
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => navigate("asmrvideo")}>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_1}
                controls
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent"></div>
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-6xl text-4xl font-bold text-pallet4">
              ASMR
            </div>
          </SwiperSlide>

          <SwiperSlide onClick={() => navigate("cookingasmrvideo")}>
            <div className="aspect-ratio-4-5">
              <video
                src={slide_video_2}
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent"></div>
            </div>
            <div className="absolute font-confine bottom-5 md:left-5 left-8 lg:text-5xl text-4xl font-bold text-pallet4">
              CookingASMR
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
