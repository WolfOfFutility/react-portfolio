import React from "react"
import "./BlogList.css"

import Blog from "./Blog"

class BlogList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            blogsArray: []
        }
    }

    componentDidMount() {
        this.loadBlogs()
    }

    async loadBlogs() {
        var url = "http://localhost:3001/allPosts"
        await fetch(url).then((response) => response.json()).then(res => {
            this.setState({blogsArray: res})
        }).catch(e => {
            console.log(e)
        })
    }

    renderBlogs() {
        return this.state.blogsArray.map((blog, key) => {
            return <Blog key={key} date={blog.Date} title={blog.Title} author={blog.Author} />
        })
    }

    render(props) {
        return (
            <div className="blog-list-box">
                {this.renderBlogs()}
            </div>
        )
    }
}

export default BlogList