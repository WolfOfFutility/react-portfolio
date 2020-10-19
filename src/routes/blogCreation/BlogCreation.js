import React from "react"
import "./BlogCreation.css"

import TopMenu from "../../components/topMenu/TopMenu"
import BackendLogin from "../../components/backendLogin/BackendLogin"
import ContentListItem from "../../components/contentListItem/ContentListItem"

class BlogCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedType: "",
            titleCreationStatus: "none",
            subtitleCreationStatus: "none",
            textCreationStatus: "none",
            listCreationStatus: "none",
            imageCreationStatus: "none",
            createdItems: [],
            titleContent: "",
            subtitleContent: "",
            textContent: "",
            listContent: "",
            imageContent: "",
            blogName: ""
        }

    }

    selectType(type) {
        if(type === "title") {
            this.setState({
                titleCreationStatus: "block",
                subtitleCreationStatus: "none",
                textCreationStatus: "none",
                listCreationStatus: "none",
                imageCreationStatus: "none",
                selectedType: type
            })
        }
        else if(type === "subtitle") {
            this.setState({
                titleCreationStatus: "none",
                subtitleCreationStatus: "block",
                textCreationStatus: "none",
                listCreationStatus: "none",
                imageCreationStatus: "none",
                selectedType: type
            })
        }
        else if(type === "text") {
            this.setState({
                titleCreationStatus: "none",
                subtitleCreationStatus: "none",
                textCreationStatus: "block",
                listCreationStatus: "none",
                imageCreationStatus: "none",
                selectedType: type
            })
        }
        else if(type === "list") {
            this.setState({
                titleCreationStatus: "none",
                subtitleCreationStatus: "none",
                textCreationStatus: "none",
                listCreationStatus: "block",
                imageCreationStatus: "none",
                selectedType: type
            })
        }
        else if(type === "image") {
            this.setState({
                titleCreationStatus: "none",
                subtitleCreationStatus: "none",
                textCreationStatus: "none",
                listCreationStatus: "none",
                imageCreationStatus: "block",
                selectedType: type
            })
        }
        else {
            // Do nothing
        }
    }

    addContentItem() {
        var currentType = this.state.selectedType
        var contentList = this.state.createdItems

        if(currentType === "title") {
            contentList.push({"type": "title", text: this.state.titleContent})
            this.setState({createdItems: contentList})
        }
        else if(currentType === "subtitle") {
            contentList.push({"type": "subtitle", text: this.state.subtitleContent})
            this.setState({createdItems: contentList})
        }
        else if(currentType === "text") {
            contentList.push({"type": "text", text: this.state.textContent})
            this.setState({createdItems: contentList})
        }
        else if(currentType === "list") {
            contentList.push({"type": "list", text: this.state.listContent})
            this.setState({createdItems: contentList})
        }
        else if(currentType === "image") {
            contentList.push({"type": "image", url: this.state.imageContent, size: "small", leftIndent: "20px", location: "center", caption: "A new image."})
            this.setState({createdItems: contentList})
        }
    }

    async saveBlog() {
        var date = "19 OCT"
        await fetch("http://localhost:3001/createPost?date=" + date + "&title=" + this.state.blogName + "&author=Ceejay Kelly&sections=" + JSON.stringify(this.state.createdItems)).then(response => response.json()).then(res => {
            console.log(res)
        })
    }

    renderContentList() {
        return this.state.createdItems.map((item, key) => {
            return <ContentListItem type={item.type} text={item.text}/>
        })
    }

    render(props) {
        return (
            <div>
                {/* <BackendLogin /> */}
                <TopMenu />
                {/* <p>Welcome back, {sessionStorage.getItem("User")}</p> */}
                <div className="blog-creation-box">
                    <div className="blog-name-box">
                        <input type="text" placeholder="Blog Name" onChange={(event) => this.setState({blogName: event.target.value})}/>
                    </div>
                    <div className="item-type-selection">
                        <div id="title-type" className="item-type" onClick={() => this.selectType("title")}>Title</div>
                        <div id="subtitle-type" className="item-type" onClick={() => this.selectType("subtitle")}>Subtitle</div>
                        <div id="text-type" className="item-type" onClick={() => this.selectType("text")}>Text</div>
                        <div id="list-type" className="item-type" onClick={() => this.selectType("list")}>List</div>
                        <div id="image-type" className="item-type" onClick={() => this.selectType("image")}>Image</div>
                    </div>
                    <div className="content-creation-section">
                        <div className="content-creation-text">
                            <div className="content-creation-main">
                                <div style={{display: this.state.titleCreationStatus}} className="title-creation">
                                    <input type="text" placeholder="Title" onChange={(event) => this.setState({titleContent: event.target.value})}/>
                                </div>
                                <div style={{display: this.state.subtitleCreationStatus}} className="subtitle-creation">
                                    <input type="text" placeholder="Subtitle" onChange={(event) => this.setState({subtitleContent: event.target.value})}/>
                                </div>
                                <div style={{display: this.state.textCreationStatus}} className="text-creation">
                                    <input type="text" placeholder="Text" onChange={(event) => this.setState({textContent: event.target.value})}/>
                                </div>
                                <div style={{display: this.state.listCreationStatus}} className="list-creation">
                                    <input type="text" placeholder="List Item" onChange={(event) => this.setState({listContent: event.target.value})}/>
                                </div>
                                <div style={{display: this.state.imageCreationStatus}} className="image-creation">
                                    <input type="text" placeholder="Image Link" onChange={(event) => this.setState({imageContent: event.target.value})}/>
                                </div>        
                            </div>
                            <div className="create-button-area">        
                                <div className="create-button" onClick={() => this.addContentItem()}>Add</div>
                                <div className="save-blog-button" onClick={() => this.saveBlog()}>Save Blog</div>
                            </div>               
                        </div>
                        <div className="content-to-add">
                            {this.renderContentList()}
                            {/* <ContentListItem type="Title" text="Practice Title 2" />
                            <ContentListItem type="List" text="list 1, list 2, list 3" />
                            <ContentListItem type="Text" text="Practice text" /> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BlogCreation