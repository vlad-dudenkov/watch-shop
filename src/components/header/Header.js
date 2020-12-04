import React from "react"
import "./header.css"
import { NavHeader } from "./navHeader/NavHeader"
import imgLogin1 from "./../../img/Vector.png"
import imgLogin2 from "./../../img/s.png"

export const Header = (props) =>{
    return(
        <div className="header-wraper">
            <div className="header-top">
                <div className="phone-numbers">
                    <div className="phone-content">
                        <img className="phone-content__img"
                        src={props.imgPhone.img} 
                        />
                        <div className="phone-content__row">
                         <span> 8 (812) 123-45-67 |  работаем 7 дней в неделю  |  9.00-18.00 </span>                     
                        </div>
                    </div>
                </div>
                <div className="login">
                    <div className="login-img">
                        <img className="login-img__img1"
                        src={imgLogin1}
                        />
                        <img className="login-img__img2"
                        src={imgLogin2}
                        />
                    </div>
                    <div className="login-registration-container">
                        <div className="login-registration-container__row"> вход </div>
                        /
                        <div className="login-registration-container__row"> регистрация </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <NavHeader/>
            </div>
        </div>
    )
} 