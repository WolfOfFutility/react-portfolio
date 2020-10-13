import React from "react"
import "./BlogList.css"

const Blog = (props) => {
    return (
        <div className="blog-box">
            <div class="date-box">{props.date}</div>
            {/* <div class="title-box"></div>
            <div class="author-box"></div>
            <div class="description-box"></div> */}
        </div>
    )
}

export default Blog