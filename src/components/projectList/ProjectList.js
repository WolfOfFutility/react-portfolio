import React from "react"
import "./ProjectList.css"

import Project from "./Project"

const ProjectList = () => {
    return (
        <div className="project-list-box">
            <Project 
                id="1"
                name="Portfolio Website" 
                description="A project made with ReactJs, designed as a portfolio website." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/portfolio-website-thumbnail.png" 
            />
            <Project 
                id="2"
                name="Stock Market Bot" 
                description="A project made with Python, designed as a stock market bot." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/stock-market-thumbnail.png" 
            />
            <Project 
                id="3"
                name="Block&amp;Block Website" 
                description="A Project made using ReactJs, for a small business based in Brisbane called Block&amp;Block." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/block-and-block-thumbnail.png" 
            />
            <Project 
                id="4"
                name="Weather Forecast Website" 
                description="A Project made using NodeJs, which allows for a user to search a location, and the current and future weather forecast for that area will be shown." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/weather-website-thumbnail.png" 
            />
        </div>
    )
}

export default ProjectList