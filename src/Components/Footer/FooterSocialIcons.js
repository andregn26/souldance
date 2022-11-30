import React from "react"
import { Fragment } from "react"
import { SocialIcon } from "react-social-icons"

export default function FooterSocialIcons() {
  const socials = [
    {
      icon: (
        <SocialIcon
          network="facebook"
          bgColor="transparent"
          fgColor="#f3f2f2"
        />
      ),
      link: "https://pt-pt.facebook.com/souldance.anacardoso/",
    },
    {
      icon: (
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor="#f3f2f2"
        />
      ),
      link: "https://www.instagram.com/souldance.anacardoso/",
    },
    {
      icon: (
        <SocialIcon
          network="whatsapp"
          bgColor="transparent"
          fgColor="#f3f2f2"
        />
      ),
      link: "https://api.whatsapp.com/send/?phone=351912785503",
    },
  ]
  return (
    <Fragment>
      {socials.map((socialIcon, index) => (
        <li key={`Icon${index}`}>
          <a target="blank" href={socialIcon.link}>
            {socialIcon.icon}
          </a>
        </li>
      ))}
    </Fragment>
  )
}
