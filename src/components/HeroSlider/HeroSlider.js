import React, { useState } from "react";
import "./HeroSlider.css";
import SingleSlider from "./SingleSlider";
import slider1 from "../../images/slider/slider1.jpg";
import slider2 from "../../images/slider/slider2.jpg";

import bannerImage1 from "../../images/banner-food.png";
import bannerImage2 from "../../images/rider.png";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

const HeroSlider = () => {
  const sliderPart = [
    {
      paragraph: "Start to learning today",
      heading: `Fastest
            Delivery &
            Easy Pickup`,
      bg: slider1,
      bannerImage: bannerImage1
    },
    {
      paragraph: "Start to learning today",
      heading: `Fastest
            Delivery &
            Easy Pickup`,
      linkText: "Find Courses",
      bg: slider2,
      bannerImage: bannerImage2
    },

  ];

  const [toggleVideo, setToggleVideo] = useState(false);
  const handleToggle = () => setToggleVideo(!toggleVideo);
  const [, setSlideIndex] = useState(0);

  const onClickHandler = (swiper) => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        let a = swiper.clickedSlide.attributes.getNamedItem(
          "data-swiper-slide-index"
        ).value;
        setSlideIndex(a);
      }
    }
  };
  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        onClickHandler={(swiper) => onClickHandler(swiper)}
        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
      >
        {sliderPart.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <SingleSlider totalData={slide} handleToggle={handleToggle} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={toggleVideo ? 'video-player active' : 'video-player'}>
        <iframe title="This is a unique title"
          src="https://www.youtube.com/embed/SMKPKGW083c?controls=0"
    
        >
          <i className="fa fa-times"></i>
        </iframe>
      </div>
    </div>
  );
};

export default HeroSlider;
