// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel } from "swiper/modules";
import { useEffect, useRef } from "react";

import slide_video_1 from "/assets/videos/5.mp4";
import slide_video_2 from "/assets/videos/6.mp4";
import slide_video_3 from "/assets/videos/7.mp4";
import slide_video_4 from "/assets/videos/8.mp4";
import Transition from "../Transition";

export default function ASMRVideo() {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;

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

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        const slides = swiperRef.current.swiper.slides;
        slides.forEach((slide, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            slide.querySelector(".slide-content").classList.remove("rotate-20");
            slide.querySelector(".slide-content").classList.add("rotate-4");
          } else {
            slide.querySelector(".slide-content").classList.remove("rotate-4");
            slide.querySelector(".slide-content").classList.add("rotate-20");
          }
        });
      });
    }
  }, []);

  const slides = [
    { id: 2, video: slide_video_2 },
    { id: 3, video: slide_video_3 },
    { id: 4, video: slide_video_4 },
    { id: 1, video: slide_video_1 },
  ];
  return (
    <Transition>
      <div className="flex items-center justify-center bg-pallet4">
        <div className="text-7xl font-confine text-black ml-48 hidden lg:block">
          ASMR
        </div>
        <Swiper
          ref={swiperRef}
          direction={"vertical"}
          centeredSlides={true}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 0.1,
          }}
          slidesPerView={1}
          spaceBetween={-120}
          loop={true}
          loopAddBlankSlides={true}
          // loopAdditionalSlides={0}
          modules={[Mousewheel]}
          speed={800}
          className="mySwiper w-screen h-screen px-2 flex-1"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: -120,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 820,
            },
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div
                key={index}
                className="flex justify-center items-center w-full h-full slide-content transition-transform duration-1000"
              >
                <div
                  className="md:w-[600px] w-[400px] aspect-[4/5]"
                  style={{
                    // backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    position: "relative",
                    overflow: "hidden",

                    z: 0,
                  }}
                >
                  <video
                    controls
                    loop
                    src={slide.video}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      minWidth: "100%",
                      minHeight: "100%",
                      width: "auto",
                      height: "auto",
                      zIndex: -1,
                      transform: "translate(-50%, -50%)",
                    }}
                  ></video>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Transition>
  );
}
