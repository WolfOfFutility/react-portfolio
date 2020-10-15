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
            var blogItems = []
            blogItems.push(this.state.blog.Sections)
            console.log(blogItems)
        }

        return blogItems[0].map((item, key) => {
            if(item.type === "title") {
                return (
                    <div key={key} className="section-heading">{item.text}</div>
                )
            }
            else if(item.type === "subtitle") {
                return (
                    <div key={key} className="section-subheading">{item.text}</div>
                )
            }
            else if(item.type === "list") {
                return (
                    <ul key={key} className="section-list">
                        {item.items.map((list, key) => {
                            return <li className="section-list-item">{list}</li>
                        })}
                    </ul>
                )
            }
            else {
                return (
                    <div key={key} className="section-text">{item.text}</div>
                )
            }
        })
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
                <div className="blog-section">
                    {this.renderBlogInfo()}
                </div>
                
                {/* <div className="blog-section">
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
                </div> */}
            </div>
        )
    }
}

export default BlogsPage