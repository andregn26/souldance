import React, { useState } from "react"
import { ButtonFillLight } from "../UI/Button"
import {
  SwiperMobile,
  SwiperDesktop,
  SwiperTablet,
} from "../Swiper/AboutUsSwiper"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { ModalTemplate } from "../UI/modals/ModalTemplate"

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)")
  const isDesktop = useMediaQuery("(min-width: 1025px)")

  // const [addClass, setAddClass] = useState(false)

  const [showModal, setShowModal] = useState(false)
  // const onClose = () => {
  //   setIsOpen(!isOpen)
  //   setAddClass(!addClass)
  // }

  return (
    <>
      <section className="AboutUs_GridArea AboutUs_NewGrid AboutUs">
        <div className="AboutUs_Text_GridArea AboutUs--TextContainer">
          <h2 className="AboutUs--Title">MAIS QUE UMA ESCOLA DE DANÇA</h2>
          <p className="AboutUs--Paragraph">
            Em 2018, a SoulDance foi fundada com uma simples missão: Fazer da
            dança uma parte integrante da vida de todos nós. Com a entrega e
            dedicação dos mais conceituados professores do mercado, trabalhamos
            para construir um lugar onde os nossos alunos são estimulados a
            descobrir, sem receios, todo o seu potencial e a criar uma
            comunidade assente na diversidade e inclusão ligada pela dança.
          </p>
          <div className="AboutUs--ButtonContainer">
            <ButtonFillLight
              className="fullWidth"
              onClick={() => {
                setShowModal(true)
              }}
            >
              Mensagem da Fundadora
            </ButtonFillLight>
          </div>
        </div>
        {isDesktop && (
          <div className="AboutUs_Swiper_GridArea">
            <SwiperDesktop />
          </div>
        )}

        {isTablet && (
          <div className="AboutUs_Swiper_GridArea">
            <SwiperTablet />
          </div>
        )}
        {isMobile && (
          <div className="AboutUs_Swiper_GridArea">
            <SwiperMobile />
          </div>
        )}
      </section>
      {showModal && (
        <div>
          {" "}
          <ModalTemplate isOpen={true} onClose={() => setShowModal(false)} />
        </div>
      )}{" "}
    </>
  )
}
