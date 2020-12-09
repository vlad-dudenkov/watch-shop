import React from "react"
import imgClock from "./../img/62050.png"

let initialState={
    clock:[
        {id:1, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:2, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:3, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:4, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:5, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:6, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:7, img:imgClock, name:" Louis XVI ATHOS", price:1650},
        {id:8, img:imgClock, name:" Louis XVI ATHOS", price:1650},
    ]
}

export const SectionReducers = (state= initialState, action) =>{
    switch(action.type){
        default:return state
    }
}