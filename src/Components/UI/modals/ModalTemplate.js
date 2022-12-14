import React from "react"
import { useState, useEffect } from "react"
import { useScrollLock } from "../../../hooks/useScrollLock"

export function ModalTemplate(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen)
  const delayedOnClose = () => {
    console.log("Fading out...")
    setIsOpen(false)
    setTimeout(() => {
      console.log("Closing now!")
      props.onClose()
    }, 1500)
  }

  useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    return () => {
      clearTimeout(delayedOnClose)
    }
  }, [])

  useScrollLock()
  return (
    <div
      isOpen={isOpen}
      onRequestClose={delayedOnClose}
      closeTimeoutMS={1500}
      className={`Modal--Container ${
        isOpen ? "OpenTransition" : " CloseTransition OpenTransition"
      }`}
    >
      <div className="Modal--Background" onClick={delayedOnClose}>
        <div
          className="Modal"
          tabIndex="-1"
          role="dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 id="myModalLabel" className="modal-title">
                Modal title
              </h1>
            </div>

            <div className="modal-body">
              <h2>1. Modal sub-title</h2>

              <p>
                Liquor ipsum dolor sit amet bearded lady, grog murphy's bourbon
                lancer. Kamikaze vodka gimlet; old rip van winkle, lemon drop
                martell salty dog tom collins smoky martini ben nevis man o'war.
                Strathmill grand marnier sea breeze b & b mickey slim. Cactus
                jack aberlour seven and seven, beefeater early times beefeater
                kalimotxo royal arrival jack rose. Cutty sark scots whisky b & b
                harper's finlandia agent orange pink lady three wise men gin
                fizz murphy's. Chartreuse french 75 brandy daisy widow's cork 7
                crown ketel one captain morgan fleischmann's, hayride, edradour
                godfather. Long island iced tea choking hazard black bison,
                greyhound harvey wallbanger, "gibbon kir royale salty dog tonic
                and tequila."
              </p>

              <h2>2. Modal sub-title</h2>

              <p>
                The last word drumguish irish flag, hurricane, brandy manhattan.
                Lemon drop, pulteney fleischmann's seven and seven irish flag
                pisco sour metaxas, hayride, bellini. French 75 wolfram
                christian brothers, calvert painkiller, horse's neck old
                bushmill's gin pahit. Monte alban glendullan, edradour redline
                cherry herring anisette godmother, irish flag polish martini
                glen spey. Abhainn dearg bloody mary amaretto sour, ti punch
                black cossack port charlotte tequila slammer? Rum swizzle glen
                keith j & b sake bomb harrogate nights 7 crown! Hairy virgin
                tomatin lord calvert godmother wolfschmitt brass monkey
                aberfeldy caribou lou. Macu??, french 75 three wise men.
              </p>

              <h2>3. Modal sub-title</h2>

              <p>
                Pisco sour daiquiri lejon bruichladdich mickey slim sea breeze
                wolfram kensington court special: pink lady white lady or
                delilah. Pisco sour glen spey, courvoisier j & b metaxas
                glenlivet tormore chupacabra, sambuca lorraine knockdhu gin and
                tonic margarita schenley's." Bumbo glen ord the macallan
                balvenie lemon split presbyterian old rip van winkle paradise
                gin sling. Myers black bison metaxa caridan linkwood three wise
                men blue hawaii wine cooler?" Talisker moonwalk cosmopolitan
                wolfram zurracapote glen garioch patron saketini brandy
                alexander, singapore sling polmos krakow golden dream.
                Glenglassaugh usher's wolfram mojito ramos gin fizz; cactus
                jack. Mai-tai leite de on??a bengal; crown royal absolut
                allt-??-bhainne jungle juice bacardi benrinnes, bladnoch.
                Cointreau four horsemen aultmore, "the amarosa cocktail vodka
                gimlet ardbeg southern comfort salmiakki koskenkorva."
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={delayedOnClose} className="btn btn-secondary">
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
