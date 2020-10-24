const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/:id", (req, res, next) => {
    let { id } = req.params;
    const chosenProject = projects[id]

    if (!isNaN(id) && !chosenProject) {
        const err = new Error("This project doesn't exist yet...");
        err.status = 404;
        return next(err)
    }
    res.render("project", { chosenProject });
});

module.exports = router