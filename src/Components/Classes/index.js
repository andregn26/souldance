import React from "react"
import ClassesSwiper from "./ClassesSwiper"

const Classes = () => {
  return (
    <>
      <div className="Homepage--Classes_section Classes border-layout">
        <div className="Classes--Grid border-container ">
          <h2 className="Classes--Grid--Title border-child_container">
            As Nossas Modalidades
          </h2>
          <p className="Classes--Grid--Text C_Text border-child_container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Saepe numquam dolore impedit earum nobis qui, a exercitationem
            libero! Quae, explicabo.
          </p>
          <div className="Classes--Grid--Swiper C_Swiper border-child_container">
            <ClassesSwiper />
          </div>
        </div>
      </div>
    </>
  )
}

export default Classes
