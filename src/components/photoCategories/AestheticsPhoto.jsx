/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "react-id-swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";

import slide_image_1 from "/assets/images/product.jpg";
import slide_image_2 from "/assets/images/food.jpg";
import slide_image_3 from "/assets/images/portrait.jpg";
import slide_image_4 from "/assets/images/aesthetic.jpg";
import Transition from "../Transition";

export default function AestheticsPhoto() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        const slides = swiperRef.current.swiper.slides;
        slides.forEach((slide, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            console.log(slide);
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
    { id: 1, image: slide_image_1 },
    { id: 2, image: slide_image_2 },
    { id: 3, image: slide_image_3 },
    { id: 4, image: slide_image_4 },
  ];
  return (
    <Transition>
      <div className="flex items-center justify-center bg-pallet2">
        <div className="text-6xl text-white ml-48 hidden lg:block">
          Aesthetics 😎
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
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div
                key={index}
                className="flex justify-center items-center w-full h-full slide-content transition-transform duration-1000"
              >
                <div
                  className="md:w-[600px] w-[400px] aspect-[4/5] bg-black"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Transition>
  );
}
