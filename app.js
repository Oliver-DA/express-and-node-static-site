const express = require("express");
const { projects } = require("./data.json");

const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { projects });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    const chosenProject = projects[id]
    res.render("project", { chosenProject });
});

app.use( (req, res, next) => {
    
    const err = new Error();
    err.message = "Sorry, looks like this is not the page you're looking for."
    err.status = 404;
    res.status(err.status)
    next(err)

});

app.use( (err, req, res, next) => {

    if (err.status === 404 && err.message) {
        res.status(404).render("404-page", { err });

    }else {
        err.message = "Something went wrong with the server"
        res.status(err.status || 500).render("error", { err })
    }

})

app.listen(3000, () => console.log("Server up and running on localhost:3000"))

