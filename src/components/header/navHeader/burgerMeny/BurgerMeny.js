import React from "react"
import "./burgerMeny.css"

export const BurgerMeny = (props) => {
    return (
        <div className="burger-meny-container">
            <button onClick={()=>{
                props.setBurgerClick(
                   props.burgerClick=="novigation-container"?
                   "novigation-container__active":
                   "novigation-container"
                )
                
                }}>hello</button>
            </div>
    )
}