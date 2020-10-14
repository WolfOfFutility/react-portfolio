const express = require("express")
const app = express()
const port = 3001

var posts = [
    {
        "Date": "13 OCT",
        "Title": "Starting this website",
        "Author": "Ceejay Kelly",
        "Sections": [
            [
                {"title1": "The Planning Phase"},
                {"text1": "filler text 1"},
                {"text2": "filler text 2"},
                {"subtitle1": "Added this subtitle"},
                {"text3": "sdgadfadfasf"},
                {"text4": "dsad a fa sdas faf "},
                {"subtitle2": "ending subtitle"}
            ]
        ]
    },
    {
        "Date": "14 OCT",
        "Title": "Setting up components",
        "Author": "Ceejay Kelly",
        "Sections": [
            [
                {"title1": "The Planning Phase"},
                {"text1": "filler text 1"},
                {"text2": "filler text 2"},
                {"subtitle1": "Added this subtitle"},
                {"text3": "sdgadfadfasf"},
                {"text4": "dsad a fa sdas faf "},
                {"subtitle2": "ending subtitle"}
            ]
        ]
    },
    {
        "Date": "14 OCT",
        "Title": "Setting up backend api calls",
        "Author": "Ceejay Kelly",
        "Sections": [
            [
                {"title1": "The Planning Phase"},
                {"text1": "filler text 1"},
                {"text2": "filler text 2"},
                {"subtitle1": "Added this subtitle"},
                {"text3": "sdgadfadfasf"},
                {"text4": "dsad a fa sdas faf "},
                {"subtitle2": "ending subtitle"}
            ]
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