import React from "react"
import "./BlogList.css"

import Blog from "./Blog"

const BlogList = () => {
    return (
        <div className="blog-list-box">
            <Blog date="14 OCT" title="Starting this website" author="Ceejay Kelly" />
            <Blog date="15 OCT" title="Setting up components" author="Ceejay Kelly" />
        </div>
    )
}

export default BlogList