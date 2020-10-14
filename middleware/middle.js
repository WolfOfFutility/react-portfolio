const express = require("express")
const app = express()
const port = 3001

var posts = [
    {
        "Date": "13 OCT",
        "Title": "Starting this website",
        "Author": "Ceejay Kelly"
    },
    {
        "Date": "14 OCT",
        "Title": "Setting up components",
        "Author": "Ceejay Kelly"
    },
    {
        "Date": "15 OCT",
        "Title": "Setting up backend api calls",
        "Author": "Ceejay Kelly"
    },
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.get("/allPosts", (req, res) => {
    res.send(posts)
})

app.listen(port, () => {
    console.log("App is listening on port " + port)
})