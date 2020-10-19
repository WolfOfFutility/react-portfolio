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
                "type": "image",
                "size": "small",
                "leftIndent": "20px",
                "location": "center",
                "url": "https://cdn.pixabay.com/photo/2020/07/23/17/54/mountain-5431950_960_720.png",
                "caption": "Blog list component example"
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
                "type": "image",
                "size": "small",
                "leftIndent": "20px",
                "location": "center",
                "url": "https://cdn.pixabay.com/photo/2020/10/11/20/15/floating-islands-5646926_960_720.jpg",
                "caption": "Project List Component example"
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
    {
        "Date": "16 OCT",
        "Title": "Adding projects to the project list",
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
        "Date": "16 OCT",
        "Title": "Existing projects on the go",
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
        "Date": "19 OCT",
        "Title": "Thinking of new C# Projects",
        "Author": "Ceejay Kelly",
        "Sections": [
            {
                "type": "title",
                "text": "Deciding what to do"
            },
            {
                "type": "text",
                "text": "I enjoy constantly challenging myself to make the most of my abilities with different languages on a regular basis, so I brainstorm some project ideas and work on them. Like most projects, it's a difficulty at first to understand exactly what it is that you are trying to achieve. I personally believe that, when making personal projects, it shouldbe based around something that you will actually USE. In the spirit of that, whenever I make projects, they are typically centered around productivity, idea generation, innovation and research. Here's a few ideas I've come up with that match some of these categories."
            },
            {
                "type": "list",
                "items": [
                    "Time/Task Management System",
                    "Audio Streaming Program",
                    "Video Streaming Program",
                    "COVID-19 Log In/Log Out Tracker"
                ]
            },
            {
                "type": "text",
                "text": "In the past, I've exhaustively done projects that involved Time/Task Management, including one that I currently have on the backburner, built in React Native, so that's a no go. I've already completed a project to do with Audio Visualisation in Electron, so that, too, is a no go. That just leave the COVID-19 Tracker and the Video Streaming Program, both of which are particularly relevant with the current goings-on."
            }
        ]
    },
]

var users = [
    {
        "Username": "ceejuser",
        "Password": "pass"
    },
    {
        "Username": "ceejadmin",
        "Password": "pass"
    }
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.get("/login", (req, res) => {
    var queryUsername = req.query.user
    var queryPassword = req.query.pass

    var responseArray = users.filter(user => user["Username"] == queryUsername && user["Password"] == queryPassword)[0]
    if(responseArray != null) {
        res.send(responseArray)
    }
    else {
        res.send([])
    }
    
})

app.get("/createPost", (req, res) => {
    var queryDate = req.query.date
    var queryTitle = req.query.title
    var queryAuthor = req.query.author
    var querySections = JSON.parse(req.query.sections)

    posts.push({
        "Date": queryDate,
        "Title": queryTitle,
        "Author": queryAuthor,
        "Sections": querySections
    })

    res.sendStatus(200)
})

app.get("/allPosts", (req, res) => {
    res.send(posts)
})

app.listen(port, () => {
    console.log("App is listening on port " + port)
})