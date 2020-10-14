import React from "react"
import "./BlogList.css"

const Blog = (props) => {
    return (
        <div className="blog-box">
            <div className="date-box">{props.date}</div>
            <div className="text-area-box">
                <div className="title-box"><p>{props.title}</p></div>
                <div className="author-box"><p>{props.author}</p></div>
            </div>
            {/* <div class="title-box"></div>
            <div class="author-box"></div>
            <div class="description-box"></div> */}
        </div>
    )
}

export default Blog