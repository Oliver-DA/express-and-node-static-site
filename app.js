const express = require("express");
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
const { notFoundError, globalError } = require("./errorHandlers");

//Initializing express app
const app = express();
const port = process.env.PORT || 5000;

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
app.listen(port, () => console.log("Server up and running on port" + port))

