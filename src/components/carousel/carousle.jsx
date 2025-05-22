import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./carousle.scss";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function SimpleSwiper(props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="txt-wrapper">
          <h1 className="en2">PUBG</h1>
          <Link to={'/store/1'}>
            <div className="a-wrapper pay2">
              <span></span>
              بــیـــشـــتـــر
            </div>
          </Link>
        </div>
        <div className="img-wrapper">
          <img src={props.first} alt="PUBG" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="txt-wrapper">
          <h1 className="en2">COD WARZONE</h1>
          <Link to={'/store/2'}>
            <div className="a-wrapper pay2">
              <span></span>
              بــیـــشـــتـــر
            </div>
          </Link>
        </div>
        <div className="img-wrapper">
          <img src={props.second} alt="Warzone" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="txt-wrapper">
          <h1 className="en2">RAINBOW SIX</h1>
          <Link to={'/store/4'}>
            <div className="a-wrapper pay2">
              <span></span>
              بــیـــشـــتـــر
            </div>
          </Link>
        </div>
        <div className="img-wrapper">
          <img src={props.third} alt="Rainbow" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
