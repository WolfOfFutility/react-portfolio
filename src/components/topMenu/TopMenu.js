import React from "react"
import "./TopMenu.css"

import {Link} from "react-router-dom"

const TopMenu = () => {
    return (
        <div className="top-menu-box">
            <div className="logo-box">Personal Portfolio</div>
            <div className="menu-button-box">
                <Link className="menu-button" to="/">Home</Link>
                <Link className="menu-button" to="/Projects">Projects</Link>
            </div>
        </div>
    )
}

export default TopMenu