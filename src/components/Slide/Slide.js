import { useState } from "react";
import { Container, Img } from "./slide.elements";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Thumbs, Navigation, Controller } from "swiper/core";
import "swiper/swiper-bundle.css";
import "./slide.css";

SwipeCore.use([Thumbs, Navigation, Controller]);

const Slide = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const data = props.data;
  const slides = data.map(({ url, color, alt }, index) => (
    <SwiperSlide tag="li">
      <Img src={url} alt={alt} thumb={false} />
    </SwiperSlide>
  ));

  const thumbs = data.map(({ url, color, alt }, index) => (
    <SwiperSlide tag="li">
      <Img src={url} alt={alt} thumb={true} />
    </SwiperSlide>
  ));

  return (
    <Container>
      {/**
       * main slide
       */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        watchSlidesProgress
        watchSlidesVisibility
        spaceBetween={0}
        slidesPerView={1}
        wrapperTag="ul"
        className="main"
      >
        {slides}
      </Swiper>
      {/**
       * thumbs used to navigate
       */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={3}
        //navigation
        direction="vertical"
        wrapperTag="ul"
        className="thumbs"
      >
        {thumbs}
      </Swiper>
    </Container>
  );
};

export default Slide;
