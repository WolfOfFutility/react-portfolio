import React from "react"

import "./TopMenu.css"

const TopMenu = () => {
    return (
        <div className="top-menu-box">
            <div className="logo-box">Personal Portfolio</div>
            <div className="menu-button-box">
                <div className="menu-button">Home</div>
                <div className="menu-button">About</div>
                <div className="menu-button">Projects</div>
            </div>
        </div>
    )
}

export default TopMenu