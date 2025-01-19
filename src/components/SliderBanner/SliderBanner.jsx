import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import img1 from "../../assets/banner-images/1.jpg";
import img2 from "../../assets/banner-images/2.jpg";
import img3 from "../../assets/banner-images/3.jpg";

const SliderBanner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="rounded-xl overflow-hidden relative">
          <img className="w-full" src={img1} alt="Slider Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center space-y-4  pr-10 p-4">
            <button className="border border-blue-500 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300 hover:text-white">
              First Look
            </button>
            <h2 className="text-white text-2xl font-bold">
              <span className="text-6xl"> 5G-friendly</span>
              <br />
              With Face Detection
            </h2>
            <p className="text-white w-[45%] text-lg">
              This is a descriptive paragraph giving more information about the
              content.
            </p>
            <button class="bg-white text-black px-4 py-2 rounded-full text-lg font-bold transition duration-300 hover:bg-blue-500 hover:text-white">
              Another Button
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl overflow-hidden relative">
          <img className="w-full" src={img2} alt="Slider Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center space-y-4  pr-10 p-4">
            <button className="border border-blue-500 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300 hover:text-white">
              First Look
            </button>
            <h2 className="text-white text-2xl font-bold">
              <span className="text-6xl"> 5G-friendly</span>
              <br />
              With Face Detection
            </h2>
            <p className="text-white w-[45%] text-lg">
              This is a descriptive paragraph giving more information about the
              content.
            </p>
            <button class="bg-white text-black px-4 py-2 rounded-full text-lg font-bold transition duration-300 hover:bg-blue-500 hover:text-white">
              Another Button
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl overflow-hidden relative">
          <img className="w-full" src={img3} alt="Slider Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center space-y-4  pr-10 p-4">
            <button className="border border-blue-500 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300 hover:text-white">
              First Look
            </button>
            <h2 className="text-white text-2xl font-bold">
              <span className="text-6xl"> 5G-friendly</span>
              <br />
              With Face Detection
            </h2>
            <p className="text-white w-[45%] text-lg">
              This is a descriptive paragraph giving more information about the
              content.
            </p>
            <button class="bg-white text-black px-4 py-2 rounded-full text-lg font-bold transition duration-300 hover:bg-blue-500 hover:text-white">
              Another Button
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderBanner;
