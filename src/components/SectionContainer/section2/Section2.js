import React from "react"
import { NavLink } from "react-router-dom"
import "./style.css"

export const Section2 = (props) => {
    return (
        <div className="section2-container">
            <div className="collection-of-the-season-2020-2021-container">
                <div className="collection-of-the-season-2020-2021-container__text">
                    Сезон 2020/21
                </div>
                <div className="clock-box">
                {props.clock.filter(f => f.id <= 3).map(m => {
                    return (
                        <div className="clock-container" key={m.id}>
                            <div className="clock-container__img-container">
                                <img
                                    className="clock-container__img"
                                    src={m.img}
                                />
                            </div>
                            <div className="clock-container__name">{m.name}</div>
                            <div className="clock-container__price">{m.price}</div>
                        </div>)
                })}
                </div>
            </div>
            <div className="new-collection-container">
                <div className="new-collection-container__text">
                    Новая коллекция
                </div>
                <div className="new-collection-container__nav-link-container">
                    <NavLink to="/Catalog"
                        className="new-collection-container__Catalog"
                    >
                        КАТАЛОГ</NavLink>
                </div>
            </div>
        </div>
    )
}