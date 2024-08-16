import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "/assets/images/backgroundPic.jpg";
import slide_image_2 from "/assets/images/backgroundPic.jpg";
import slide_image_3 from "/assets/images/backgroundPic.jpg";
import slide_image_4 from "/assets/images/backgroundPic.jpg";

function App() {
  return (
    <div className="bg-pallet4">
      <div className="container md:px-4 px-0">
        <div className="md:text-5xl text-3xl font-medium  text-center py-10">
          Photo Categories
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
            <div className="absolute bottom-5 left-5 md:text-8xl text-5xl font-bold text-pallet4">
              Product
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide_image_2} alt="slide_image" />
            <div className="absolute bottom-5 left-5 md:text-8xl text-5xl font-bold text-pallet4">
              Food
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
            <div className="absolute bottom-5 left-5 md:text-8xl text-5xl font-bold text-pallet4">
              Review
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
            <div className="absolute bottom-5 left-5 md:text-8xl text-5xl font-bold text-pallet4">
              Nature
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow z-50 -mt-8 hidden md:flex">
              <ion-icon
                name="arrow-back-outline"
                className="pointer-events-none"
              ></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow z-50 -mt-8 hidden md:flex">
              <ion-icon
                name="arrow-forward-outline"
                className="pointer-events-none"
              ></ion-icon>
            </div>
            <div className="swiper-pagination md:-mt-0 -mt-24"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
