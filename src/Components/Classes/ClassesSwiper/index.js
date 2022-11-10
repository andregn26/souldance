import React from "react"
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import ModalClasses from "../../UI/ModalClasses"

// Import Swiper styles
import "swiper/scss"
import "swiper/scss/grid"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"

import { modalities } from "../../../Data"

const ClassesSwiper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupcontent, setpopupcontent] = useState([])
  const changeContent = (modality) => {
    setpopupcontent([modality])
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          580: {
            slidesPerView: 2,
          },
        }}
      >
        {modalities.map((modality, hasLevels, hasLevelZero) => (
          <SwiperSlide className="Swiper--Slide" key={`${modality.id}`}>
            <div
              className="Swiper--Slide--Item"
              onClick={() => {
                changeContent(modality)
                setIsOpen(true)
              }}
            >
              <img
                className="Swiper--Slide--Item--Img"
                src={modality.img}
                alt={modality.danceClass}
              />
              <div className="Swiper--Slide--Overlay"></div>
              <div className="Swiper--Slide--Content">
                <h4 className="Swiper--Slide--Content--Class">
                  {modality.danceClass}
                </h4>
              </div>
              {hasLevels && hasLevelZero && (
                <h6 className="Swiper--Slide--Tag">Nível 0,1,2</h6>
              )}
              {hasLevels && !hasLevelZero && (
                <h6 className="Swiper--Slide--Tag">Nível 1,2</h6>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <div>
          {popupcontent.map((pop) => {
            return <ModalClasses pop={pop} changeContent={changeContent} />
          })}
        </div>
      )}
    </>
  )
}

export default ClassesSwiper
