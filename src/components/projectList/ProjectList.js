import React from "react"
import "./ProjectList.css"

import Project from "./Project"

const ProjectList = () => {
    return (
        <div className="project-list-box">
            <Project 
                id="1"
                name="Portfolio Website" 
                description="A project made with React, designed as a portfolio website." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg" 
            />
            <Project 
                id="2"
                name="Stock Market Bot" 
                description="A project made with Python, designed as a stock market bot." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg" 
            />
            <Project 
                id="3"
                name="Project 3" 
                description="A project made with React, designed as a portfolio website." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg" 
            />
            <Project 
                id="4"
                name="Project 4" 
                description="A project made with React, designed as a portfolio website." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="https://cdn.pixabay.com/photo/2017/06/26/08/14/laptop-2443052_960_720.jpg" 
            />
        </div>
    )
}

export default ProjectList