import React from "react"
import { useState } from "react"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { ButtonOutlineDark } from "../UI/Button"
import AboutUsSwiper from "../Swiper/AboutUsSwiper"

export default function AboutUs() {
  const isTablet = useMediaQuery("(min-width: 768px)")
  return (
    <section className="AboutUs AboutUs--Background">
      <div className="AboutUs--TextContainer">
        <h2 className="AboutUs--TextContainer--Title">
          MAIS QUE UMA ESCOLA DE DANÇA
        </h2>
        <p className="AboutUs--TextContainer--Paragraph">
          Em 2018, a SoulDance foi fundada com uma simples missão:
          <mark>
            Fazer da dança uma parte integrante da vida de todos nós.
          </mark>{" "}
          Com a entrega e dedicação dos mais conceituados professores do
          mercado, trabalhamos para construir um lugar onde os nossos alunos são
          estimulados a descobrir, sem receios, todo o seu potencial e a criar
          uma comunidade assente na diversidade e inclusão ligada pela dança.
        </p>
      </div>
      <div className="AboutUs--SwiperContainer">
        <AboutUsSwiper />
      </div>
      <div className="AboutUs--ButtonContainer">
        <ButtonOutlineDark className="FullWidth">
          Mensagem da Fundadora
        </ButtonOutlineDark>
      </div>
    </section>
  )
}
