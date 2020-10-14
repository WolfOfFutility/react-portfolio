import React from "react"
import "./ProjectsPage.css"

import TopMenu from "../../components/topMenu/TopMenu"
import ProjectList from "../../components/projectList/ProjectList"

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(props) {
        return (
            <div>
                <TopMenu />
                <ProjectList />
            </div>
        )
    }
}

export default ProjectsPage