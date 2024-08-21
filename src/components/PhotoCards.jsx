import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperPhoto.css";

import {
  EffectCoverflow,
  Pagination,
  Mousewheel,
  Navigation,
} from "swiper/modules";

import slide_image_1 from "/assets/images/OIP.jpeg";
import slide_image_2 from "/assets/images/OIP.jpeg";
import slide_image_3 from "/assets/images/OIP.jpeg";
import slide_image_4 from "/assets/images/OIP.jpeg";

function PhotoCards() {
  return (
    <div className="bg-pallet4 pb-28">
      <div className="container md:px-4 px-0 mx-auto">
        <div className="md:text-5xl text-3xl font-medium  text-center py-10">
          Photo Categories
        </div>
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
          className="mySwiperPhoto"
        >
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <img
                src={slide_image_1}
                alt="slide_image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-5 md:left-5 left-8 md:text-8xl text-5xl font-bold text-pallet4">
              Product
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <img
                src={slide_image_2}
                alt="slide_image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-5 md:left-5 left-8 md:text-8xl text-5xl font-bold text-pallet4">
              Food
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-ratio-4-5">
              <img
                src={slide_image_3}
                alt="slide_image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-5 md:left-5 left-8 md:text-8xl text-5xl font-bold text-pallet4">
              Review
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black">
            <div className="aspect-ratio-4-5">
              <img
                src={slide_image_4}
                alt="slide_image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-5 md:left-5 left-8 md:text-8xl text-5xl font-bold text-pallet4">
              Nature
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev cursor-pointer bg-pallet3 p-10 rounded-full text-white hidden md:flex"></div>
          <div className="swiper-button-next cursor-pointer bg-pallet3 p-10 rounded-full text-white hidden md:flex"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default PhotoCards;
