let express = require("express");
let app = express();
let router = require("./routes");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/", router);

app.listen(3000, () => console.log("Server started"));
