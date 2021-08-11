import React, { useEffect, useRef } from 'react'
import './reveal.css'
import { CSSRulePlugin } from 'gsap/all'
import { TimelineLite, Power2 } from 'gsap/gsap-core'

const ImageReveal = ({ height, img }) => {

    let container = useRef(null)
    let image = useRef(null)
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')

    const tl = new TimelineLite()

    useEffect(() => {
        tl.to(container, 0, { css: { visibility: 'visible' } }).to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut }).from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 })
    })

    return (
        <div className="container" ref={el => container = el} style={{ height: height }}>
            <div className="img-container" style={{ height: height }}>
                <img ref={el => image = el} src="/images/text.jpg" alt="" />
            </div>
        </div>
    )
}

export default ImageReveal
