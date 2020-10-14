import React from "react"
import "./BlogsPage.css"

import TopMenu from "../../components/topMenu/TopMenu"

class BlogsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: props.location.state.blog
        }
    }

    renderBlogInfo() {
        for(var x in this.state.blog.Sections) {
            var blogItems = this.state.blog.Sections[x]

            return blogItems.map((item, key) => {
                console.log(item)
            })
            // for(var y in this.state.blog.Sections[x]) {
            //     console.log(this.state.blog.Sections[x][y])
            // }
            
        }
    }

    render(props) {
        return (
            <div>
                <TopMenu />
                <div className="blog-banner-box">
                    <div className="blog-title">
                        {this.state.blog.Title}
                    </div>
                </div>
                {/* {this.renderBlogInfo()} */}
                <div className="blog-section">
                    <div className="section-heading">Section title</div>
                    <div className="section-subheading">Section subheading</div>
                    <div className="section-text">Section text area</div>
                </div>
                <div className="blog-section">
                    <div className="section-heading">Section title</div>
                    <div className="section-subheading">Section subheading</div>
                    <div className="section-text">Section text area</div>
                    <div className="section-text">Section text area</div>
                    <div className="section-text">Section text area</div>
                    <div className="section-text">Section text area</div>
                    <div className="section-text">Section text area</div>
                    <div className="section-subheading">Section subheading</div>
                </div>
            </div>
        )
    }
}

export default BlogsPage