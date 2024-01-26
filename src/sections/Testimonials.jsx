import { React, useRef } from "react";
import CardBg from "../components/CardBg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from "../assets/svg/quote.svg";
// star,

import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import TestimonialCard from "../components/TestimonialCard";

import "./Testimonials.scss";
const Testimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <CardBg cardClassName="section-testimonials" background="#F1F2F4">
      <h1>Clients Testimonial</h1>
      <div className="testimonials-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          slidesPerView={1}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard
              stars={5}
              text="Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
              name="Robert Fox"
              job="UI/UX Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              stars={5}
              text="Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
              name="Robert Fox"
              job="UI/UX Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              stars={5}
              text="Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
              name="Robert Fox"
              job="UI/UX Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              stars={5}
              text="Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
              name="Robert Fox"
              job="UI/UX Designer"
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="custom-swiper-button custom-swiper-button-prev"
          onClick={handlePrev}
        >
          <FaArrowLeft className="icon" />
        </div>
        <div
          className="custom-swiper-button custom-swiper-button-next"
          onClick={handleNext}
        >
          <FaArrowRight className="icon" />
        </div>
      </div>
    </CardBg>
  );
};

export default Testimonials;
