import { useState } from "react";
import { Container, Img } from "./slide.elements";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Thumbs, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./slide.css";

SwipeCore.use([Thumbs, Navigation]);

const Slide = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleGrab = () => {
    const grab = document.querySelector(".swiper-slide img");

    grab.style.cursor = "grabbing";
  };

  const data = props.data;
  const slides = data.map(({ url, color, alt }, index) => (
    <SwiperSlide tag="li">
      <Img src={url} alt={alt} thumb={false} />
    </SwiperSlide>
  ));

  const thumbs = data.map(({ url, color, alt }, index) => (
    <SwiperSlide tag="li">
      <Img src={url} alt={alt} thumb={true} onClick={handleGrab} />
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
        //navigation
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
