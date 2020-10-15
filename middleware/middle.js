const express = require("express")
const app = express()
const port = 3001

var posts = [
    {
        "Date": "13 OCT",
        "Title": "Starting this website",
        "Author": "Ceejay Kelly",
        "Sections": [
            {
                "type": "text",
                "text": "The entire point of this website is to showcase the ability to create a website that looks good, conveys meaning and is easy to use. This website would need to be easily scalable, have decent functionality, and effectively utilise the components/routes that React is leveraged upon. "
            },
            {
                "type": "title",
                "text": "The Planning phase"
            },
            {
                "type": "text",
                "text": "This website started off how most things do, in the planning phase. Basic functionality was planned out such as the menu, what pages there would be?, what components would be needed? Once that was done, I needed a colour scheme - something simple, like, blue, white and (dark) grey; all of which are easy to use neutral colours. Next, I set out to create a few sketches of what i wanted on each page - blog post lists, a top menu, a list of projects, etc. I then translated these over into Adobe XD, where i made a few other sketch ups. "
            },
            {
                "type": "text",
                "text": "filler text 3"
            },
            {
                "type": "subtitle",
                "text": "subtitle 2"
            }
        ]
    },
    {
        "Date": "14 OCT",
        "Title": "Setting up components",
        "Author": "Ceejay Kelly",
        "Sections": [
            {
                "type": "title",
                "text": "Planning the components"
            },
            {
                "type": "text",
                "text": "Every project needs a few good key components to make it easily managed. I decided to go with a few that I could implement to make the site as scalable as possible, which included things like: "
            },
            {
                "type": "list",
                "items": [
                    "A Blog List Component",
                    "A Hero Image Component",
                    "A Project List Component",
                    "A Top Menu Component",
                ]
            },
            {
                "type": "subtitle",
                "text": "Blog List Component"
            },
            {
                "type": "text",
                "text": "The blog list component is designed to render a list of all the blogs that I've posted on the homepage, which can then be used to navigate to this page, where individual blog information is rendered."
            },
            {
                "type": "text",
                "text": "However, the blog list requires a Blog component as well, which is what renders them in the boxes as they are."
            },
            {
                "type": "subtitle",
                "text": "Hero Image Component"
            },
            {
                "type": "text",
                "text": "Currently, the home page has a hero image, the first thing that will immediately attract the attention of the user - an Image of me with my name and how I describe myself."
            },
            {
                "type": "subtitle",
                "text": "Project List Component"
            },
            {
                "type": "text",
                "text": "The project list component is used similarly to the blog list component, it will render project components in an easy to read and clickable format, which will then allow for redirection to a github repository containing that project, as well as a learn more page, which will provide more images and descriptions of the project."
            },
            {
                "type": "subtitle",
                "text": "Top Menu Component"
            },
            {
                "type": "text",
                "text": "The top menu component is fairly self explantory, it will contain the top menu, with the links to render to each individual page."
            }
        ]
    },
    {
        "Date": "14 OCT",
        "Title": "Setting up backend api calls",
        "Author": "Ceejay Kelly",
        "Sections": [
            {
                "type": "title",
                "text": "The Planning Phase"
            },
            {
                "type": "text",
                "text": "filler text 1"
            },
            {
                "type": "subtitle",
                "text": "Added this subtitle"
            },
            {
                "type": "text",
                "text": "filler text 2"
            },
            {
                "type": "text",
                "text": "filler text 3"
            },
            {
                "type": "subtitle",
                "text": "subtitle 2"
            }
        ]
    },
    {
        "Date": "15 OCT",
        "Title": "Setting up the blog system",
        "Author": "Ceejay Kelly",
        "Sections": [
            {
                "type": "title",
                "text": "The Planning Phase"
            },
            {
                "type": "text",
                "text": "filler text 1"
            },
            {
                "type": "subtitle",
                "text": "Added this subtitle"
            },
            {
                "type": "text",
                "text": "filler text 2"
            },
            {
                "type": "text",
                "text": "filler text 3"
            },
            {
                "type": "subtitle",
                "text": "subtitle 2"
            }
        ]
    },
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.get("/createPost", (req, res) => {
    var queryDate = req.query.date
    var queryTitle = req.query.title
    var queryAuthor = req.query.author

    posts.push({
        "Date": queryDate,
        "Title": queryTitle,
        "Author": queryAuthor
    })

    res.sendStatus(200)
})

app.get("/allPosts", (req, res) => {
    res.send(posts)
})

app.listen(port, () => {
    console.log("App is listening on port " + port)
})