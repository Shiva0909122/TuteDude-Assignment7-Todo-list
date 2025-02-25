const express = require("express");
const app = express();

app.set("view engine", "ejs"); // EJS should be in /views
app.use(express.static("public")); // Static files (CSS, JS)
app.use(express.urlencoded({ extended: true }));

const items = [];

app.get("/", (req, res) => {
    res.render("list", { ejes: items });
});

app.post("/", (req, res) => {
    const item = req.body.ele1?.trim();
    if (item) items.push(item);
    res.redirect("/");
});

app.delete("/delete/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
