import React from "react"
import "./BlogList.css"

import Blog from "./Blog"

import {Link} from "react-router-dom"

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
            return <Link 
                    key={key} 
                    to={{
                        pathname: "/Blogs",
                        state: {
                            blog: {...blog}
                        }
                    }}
                    style={{textDecoration: "none"}}
                ><Blog date={blog.Date} title={blog.Title} author={blog.Author} /></Link>
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