import React from "react"
import FooterMap from "./FooterMap"
import FooterContent from "./FooterContent"
import FooterSocialIcons from "./FooterSocialIcons"
import Logo from "../UI/Logo"

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer--Head">
        <Logo />
        <h4 className="Footer--Head--Headline">Join the SoulDance</h4>
        <ul className="Footer--Head--Socials">
          <FooterSocialIcons />
        </ul>
      </div>

      <div className="Footer--Map">
        <FooterMap />
      </div>

      <div className="Footer-Content">
        <FooterContent />
      </div>

      <div className="Footer-Base">
        <span className="Footer-Base-Year">
          SoulDance&nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
