import React from "react"
import { Section1 } from "./section1/Section1"
import { Section2Container } from "./section2/Section2Container"
import { Secction3 } from "./section3/Section3"
import "./sectionContainerStyle.css"

export const SectionContainer = (props) => {
    return (
        <div className="sectionContainer-container">
           <Section1/>
           <Section2Container/>
           <Secction3/>
        </div>
    )
}