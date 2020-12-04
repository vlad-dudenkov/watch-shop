import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./navHeader.css"
import basketImg from "./../../../img/Vector (2).png"
import searchImg from "./../../../img/Vector (1).png"
import { BurgerMeny } from "./burgerMeny/BurgerMeny"

export const NavHeader = (props) => {
    let [burgerClick, setBurgerClick]= useState("novigation-container")
    return (
        <div className="nav-header-wraper">
            <div className="logotip-container"> PORTEN </div>
            <div className="burger-menu-container">
                <BurgerMeny 
                setBurgerClick={setBurgerClick}
                burgerClick={burgerClick}
                />
            </div>
            <div className={burgerClick}>
                <div className="novigation-section">
                    <NavLink className="novigation-section__nav"
                        to="/liked"> ПОНРАВИЛАСЬ </NavLink>
                    <NavLink className="novigation-section__nav"
                        to="/PersonalArea"> ЛИЧНЫЙ КАБИНЕТ </NavLink>
                    <NavLink className="novigation-section__nav"
                        to="/SETTINGS"> НАСТРОЙКИ </NavLink>
                </div>
                <div className="nav-basket-container">
                    <img className="nav-basket-container__img"
                        src={basketImg} />
                </div>
                <div className="nav-search-container">
                    <img className="nav-search-container__search"
                        src={searchImg} />
                </div>

            </div>
        </div>
    )
}