let express = require("express");
let app = express();

app.set("view engine", "pug");

app.listen(3000, () => console.log("Server started"));
