import React from "react"
import "./HeroImage.css"

const HeroImage = (props) => {
    return (
        <div className="hero-image-box" style={{backgroundImage: "url(" + props.img + ")"}}>
            <div class="title-area">{props.title}</div>
            <div class="description-area">{props.description}</div>
        </div>
    )
}

export default HeroImage