import React from "react"

import "./HomePage.css"
import TopMenu from "../../components/topMenu/TopMenu"
import BlogList from "../../components/blogList/BlogList"
import HeroImage from "../../components/heroImage/HeroImage"

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(props) {
        return (
            <div className="home-page-box">
                <TopMenu />
                <BlogList />
                <HeroImage />
            </div>
        )
    }
}

export default HomePage