import React, { useState } from "react"
import "./burgerMeny.css"

export const BurgerMeny = (props) => {
    let [click, setClick] = useState("burger-meny-container")
    return (
        <div className={click}
            // "burger-meny-container"
            onClick={() => {
                props.setBurgerClick(
                    props.burgerClick == "novigation-container" ?
                        "novigation-container__active" :
                        "novigation-container"
                )
                setClick(click == "burger-meny-container" ?
                    "burger-meny-container__active"
                    : "burger-meny-container"
                )
            }}
        >
            <div className="burger-meny-container__button"></div>
           
        </div>
    )
}