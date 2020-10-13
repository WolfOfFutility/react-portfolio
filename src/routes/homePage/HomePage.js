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
                <div className="main-area-box">
                    <BlogList />
                    {/* Image by Peggy_Marco from PixaBay */}
                    <HeroImage title="Ceejay Kelly" description="Apiring developer, with a keen interest in software engineering and programming frameworks" img="https://cdn.pixabay.com/photo/2020/01/08/03/56/man-4749237_1280.jpg"/> 
                </div>
            </div>
        )
    }
}

export default HomePage