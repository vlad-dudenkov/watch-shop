import React from "react"
import "./style.css"

export const Section1 = (props) => {
    return (
        <div className="section1-container">
            <div className="section1-logotip">
                <div className="section1-logotip__logo">Porten</div>
                <div className="section1-logotip__text">Minsk</div>
            </div>
            <div className="section1-container__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Purus interdum purus, est tortor pulvinar ut in.
                Fringilla a diam enim sed justo, sed iaculis sagittis.
                Tortor id eu interdum nec ut iaculis.
                Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.
                Tortor nibh magna feugiat id nunc, dui nisl viverra.
            </div>
        </div>
    )
}