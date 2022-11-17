import React from "react"
import ClassesSwiper from "../Swiper/ClassesSwiper"

const Classes = () => {
  return (
    <>
      <div className="Classes Classes--Background">
        <section className="Classes--MainContainer ">
          <div className="Classes--FirstContainer">
            <h2 className="Classes--FirstContainer--Title">
              As Nossas Modalidades
            </h2>
            <p className="Classes--FirstContainer--Text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe numquam dolore impedit earum nobis qui, a exercitationem
              libero! Quae, explicabo.
            </p>
          </div>
          <div className="Classes--SwiperContainer">
            {/* <ClassesSwiper /> */}
          </div>
        </section>
      </div>
    </>
  )
}

export default Classes
