import React from "react"
import { connect } from "react-redux"
import { Section2 } from "./Section2"


let mapStateToProps = (state) =>{
    return{
        clock:state.SectionReducers.clock,
}
}

export const Section2Container = connect(mapStateToProps,{})(Section2)