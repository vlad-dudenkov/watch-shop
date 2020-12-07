import React from "react"
import { Section1 } from "./section1/Section1"
import "./sectionContainerStyle.css"

export const SectionContainer = (props) => {
    return (
        <div className="sectionContainer-container">
           <Section1/>
        </div>
    )
}