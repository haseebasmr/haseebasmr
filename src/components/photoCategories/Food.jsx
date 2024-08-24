// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

import slide_image_1 from "/assets/images/product.jpg";
import { useEffect, useRef } from "react";
// import slide_image_2 from "/assets/images/food.jpg";
// import slide_image_3 from "/assets/images/portrait.jpg";
// import slide_image_4 from "/assets/images/aesthetic.jpg";

export default function Food() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        const slides = swiperRef.current.swiper.slides;
        slides.forEach((slide, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            console.log(slide);
            slide.querySelector(".slide-content").classList.remove("rotate-45");
          } else {
            slide.querySelector(".slide-content").classList.add("rotate-45");
          }
        });
      });
    }
  }, []);
  return (
    <>
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        centeredSlides={true}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 0.5,
          thresholdDelta: 10,
          thresholdTime: 1000,
        }}
        slidesPerView={1}
        loop={true}
        modules={[Mousewheel]}
        speed={800}
        className="mySwiper w-screen h-screen bg-slate-600 px-2"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full slide-content transition-transform duration-1000">
            <div
              className="w-[600px] aspect-[4/5] bg-black overflow-hidden"
              style={{
                backgroundImage: `url(${slide_image_1})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full slide-content transition-transform duration-1000">
            <div
              className="w-[600px] aspect-[4/5] bg-black overflow-hidden"
              style={{
                backgroundImage: `url(${slide_image_1})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full slide-content transition-transform duration-1000">
            <div
              className="w-[600px] aspect-[4/5] bg-black overflow-hidden"
              style={{
                backgroundImage: `url(${slide_image_1})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
