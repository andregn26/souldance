import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/scss"
import "swiper/scss/grid"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"

import { modalities } from "../../../Data"

const ClassesSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          480: {
            width: 480,
            slidesPerView: 1,
          },
        }}
      >
        {modalities.map((modality, hasLevels, hasLevelZero) => (
          <SwiperSlide key={`${modality.id}`}>
            <div
              className="Gallery-Item"
              onClick={() => {
                // changeContent(modality)
                // setIsOpen(true)
              }}
            >
              <img
                className="Gallery-Item-Img"
                src={modality.img}
                alt={modality.danceClass}
              />
              <div className="Overlay"></div>
              <div className="Gallery-Item-Content">
                <h2 className="Gallery-Item-Content-Class">
                  {modality.danceClass}
                </h2>
              </div>
              {hasLevels && hasLevelZero && (
                <div className="Gallery-Item-Tag">Nível 0,1,2</div>
              )}
              {hasLevels && !hasLevelZero && (
                <div className="Gallery-Item-Tag">Nível 1,2</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ClassesSwiper
