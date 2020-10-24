const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const chosenProject = projects[id]
    res.render("project", { chosenProject });
});

module.exports = router