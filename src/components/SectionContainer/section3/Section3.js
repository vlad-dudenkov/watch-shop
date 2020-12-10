import React from "react"
import { NavLink } from "react-router-dom"
import "./style.css"

export const Secction3 = (props) => {
    return (
        <div className="section3-container">
            <div className="section3-container__photos">
            </div>
            <div className="collection-2018-container">
                <div className="collection-2018-containe__heading">
                    коллекция 2018
                </div>
                <div className="collection-2018-containe__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Non rutrum ornare ut mattis habitant dui arcu.
                    Sagittis amet nunc ut neque quis nibh arcu.
                    Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur.
                    Amet convallis quis gravida facilisis vulputate.
                    Faucibus facilisi habitasse ipsum interdum dictum aliquet.
                    Velit quis ullamcorper pulvinar nulla malesuada integer.
                    Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor.
                    Viverra viverra ullamcorper scelerisque risus dignissim egestas.
                    Id aliquam a aliquam egestas leo orci pharetra sed diam
                </div>
                <div className="collection-2018-containe__nav-container">
                    <NavLink
                        className="collection-2018-containe__nav-link"
                        to="/viewСollection"
                    >
                        посмотреть коллекцию</NavLink>
                </div>
            </div>
        </div>
    )
}