const express = require("express");
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
const { notFoundError, globalError } = require("./errorHandlers");

//Initializing express app
const app = express();

//Setting up pug as a view engine
app.set("view engine", "pug");

//Express middleware for static assets
app.use("/static", express.static("public"));

//Routes
app.use(mainRoutes);
app.use("/projects",projectRoutes);

//Errors
app.use(notFoundError);
app.use(globalError);

//App listenning on port 3000
app.listen(3000, () => console.log("Server up and running on localhost:3000"))

