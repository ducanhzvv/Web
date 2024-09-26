const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`Server dang chay o cong ${port}`);
});
const names = [];
app.post("/submit", (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.json({ message: `Xin chào, ${name}!`, names });
});
