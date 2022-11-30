import React, { useState } from "react"
import { schoolPhotos } from "../../Data"
import { Swiper, SwiperSlide } from "swiper/react"

// import "./styles.css"
import "swiper/css"
// Import Swiper styles
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
// import required modules
import { EffectFlip, Pagination, FreeMode, Navigation, Thumbs } from "swiper"

export function SwiperMobile() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#7769bf",
          "--swiper-pagination-bullet-inactive-color": "#282340",
          "--swiper-pagination-bullet-inactive-opacity": ".4",
        }}
        effect={"flip"}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFlip, Pagination]}
      >
        {schoolPhotos.map((photo, index) => (
          <SwiperSlide
            style={{
              height: "300px",
            }}
            className="AboutUsSwiperMobile--SwiperSlide"
            key={`school-${index}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={photo.img}
              alt={`school${photo.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function SwiperTablet() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Swiper
        className="test"
        style={{
          height: "400px",
          marginBottom: "10px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          // when window width is >= 480px
          758: {
            centeredSlides: true,
          },
          // when window width is >= 640px
          4000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {schoolPhotos.map((photo) => (
          <SwiperSlide
            style={{
              height: "400px",
            }}
            key={`${photo.id}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={photo.img}
              alt={`school${photo.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          height: "100px",
        }}
        onSwiper={setThumbsSwiper}
        // direction="vertical"
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        // className="Swiper--AboutUs--Desktop--Secondary"
      >
        {schoolPhotos.map((photo) => (
          <SwiperSlide
            style={{
              height: "100px",
            }}
            // className="Swiper--AboutUs--Mobile--SwiperSlide"
            key={`${photo.id}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={photo.img}
              alt={`school${photo.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function SwiperDesktop() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Swiper
        className="test"
        style={{
          marginRight: "0",
          marginBottom: "10px",
          height: "400px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {schoolPhotos.map((photo) => (
          <SwiperSlide
            style={{
              height: "400px",
            }}
            key={`${photo.id}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={photo.img}
              alt={`school${photo.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // className="test"
        style={{
          marginRight: "0",
          height: "100px",
        }}
        onSwiper={setThumbsSwiper}
        // direction="vertical"
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        // className="Swiper--AboutUs--Desktop--Secondary"
      >
        {schoolPhotos.map((photo) => (
          <SwiperSlide
            style={{
              height: "100px",
            }}
            // className="Swiper--AboutUs--Mobile--SwiperSlide"
            key={`${photo.id}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={photo.img}
              alt={`school${photo.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
