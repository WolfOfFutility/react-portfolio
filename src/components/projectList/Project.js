import React from "react"

function expandProjectImage(props) {
    document.querySelector("#b" + props.id).style.height = "70%"
    document.querySelector("#i" + props.id).style.position = "absolute"
    document.querySelector("#i" + props.id).style.zIndex = 1000
    document.querySelector("#i" + props.id).style.height = "70%"
    document.querySelector("#i" + props.id).style.width = "91.5%"
    document.querySelector("#d" + props.id).style.color = "white"
    document.querySelector("#d" + props.id).style.zIndex = 1001
}


const Project = (props) => {
    return (
        <div id={"b" + props.id} className="project-box">
            <div id={"i" + props.id} className="project-showcase-image" style={{backgroundImage: "url(" + props.img + ")"}} onClick={() => expandProjectImage(props)}></div>
            <div id={"d" + props.id} className="project-description">
                <div className="project-name">{props.name}</div>
                <div className="project-desc-text"><p>{props.description}</p></div>
                <div className="project-button-group">
                    <div className="project-button">Learn More</div>
                    <div className="project-button" onClick={() => window.location.href = props.githubLink}>GitHub</div>
                </div>
            </div>
        </div>
    )
}

export default Project