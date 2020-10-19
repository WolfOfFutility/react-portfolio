import React from "react"
import "../../routes/blogCreation/BlogCreation.css"

const ContentListItem = (props) => {
    return (
        <div className="indiv-content-item">
            <div className="indiv-content-type">{props.type}</div>
            <div className="indiv-content">{props.text}</div>
        </div>
    )
}

export default ContentListItem