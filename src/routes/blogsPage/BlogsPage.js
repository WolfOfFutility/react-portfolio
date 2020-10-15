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
                            return <li key={key} className="section-list-item">{list}</li>
                        })}
                    </ul>
                )
            }
            else if(item.type === "image") {
                var customwidth = 0;
                var customheight = 0;

                if(item.size === "small") {
                    customwidth = "40%"
                    customheight = "50vh"
                }
                else if(item.size === "medium") {
                    customwidth = "60%"
                    customheight = "50vh"
                }
                else {
                    customwidth = "100%"
                    customheight = "50vh"
                }

                return (
                <div key={key} className="section-image" style={{backgroundImage: "url(" + item.url + ")", width: customwidth, height: customheight, float: item.location, marginLeft: item.leftIndent}}><p>{item.caption}</p></div>
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