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
                name="Block &amp; Block Website" 
                description="A Project made using ReactJs, for a small business based in Brisbane called Block&amp;Block. Currently live at www.blockandblock.com.au." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/block-and-block-thumbnail.png" 
            />
            <Project 
                id="3"
                name="Weather Forecast Website" 
                description="A Project made using NodeJs, which allows for a user to search a location, and the current and future weather forecast for that area will be shown. Adapted from content learnt in a Udemy class and rendered to have a front end." 
                githubLink="https://github.com/WolfOfFutility/node-weather-website" 
                img="./img/weather-website-thumbnail.png" 
            />
            <Project 
                id="4"
                name="Stock Market Bot" 
                description="A project made with Python, designed as a stock market bot, buying and selling automatically according to several algorithms written into it." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/stock-market-thumbnail.png" 
            />
            <Project 
                id="5"
                name="Web Scraper For Jobs" 
                description="A project built in python that asks for a job title and a location, and then prints a csv file that contains a list of jobs containing those keywords in the area specified." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/job-scraper-thumbnail.png" 
            />
            <Project 
                id="6"
                name="WebSiege Website Design" 
                description="A project that is essentially just a design, with little to no actual functionality. The name, images, etc, are all just filler information." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/web-siege-thumbnail.png" 
            />
            <Project 
                id="7"
                name="Just Throw It In Website" 
                description="A project created as a personal hobby, very early into my degree. This is rendered using PHP, HTML, CSS and a dash of JavaScript (DOM). Not Live." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/just-throw-it-in-thumbnail.png" 
            />
            <Project 
                id="8"
                name="Task Scheduling System" 
                description="A project created early into my learning of Python. This is a rough task scheduler, built using Python and TKinter." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/python-scheduling-thumbnail.png" 
            />
            <Project 
                id="9"
                name="Audio Visualisation App" 
                description="A project created used ElectronJS, allows the importing of MP3s and MP4s, queueing songs, and playing them with a visualisation of the song frequencies." 
                githubLink="https://github.com/WolfOfFutility/react-portfolio" 
                img="./img/audio-vis-thumbnail.png" 
            />
            
        </div>
    )
}

export default ProjectList