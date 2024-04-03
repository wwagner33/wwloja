let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("app", {
        title: "Home",
    });
});

module.exports = router;
