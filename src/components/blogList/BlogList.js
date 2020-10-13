import React from "react"
import "./BlogList.css"

import Blog from "./Blog"

const BlogList = () => {
    return (
        <div className="blog-list-box">
            <Blog date="14 OCT" />
            <Blog date="15 OCT" />
            <Blog date="16 OCT" />
            <Blog date="17 OCT" />
        </div>
    )
}

export default BlogList