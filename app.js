const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const items = [];

app.get("/", function (req, res) {
    res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
    const item = req.body.ele1;
    items.push(item);
    res.redirect("/");
});

app.listen(4001, function () {
    console.log("Server started on port 4001");
});
