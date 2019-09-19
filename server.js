const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <form action="/redirect-post" method="post">
            <input type="text" name="username" placeholder="Amazon username" />
            <button type="submit" >Post</button>
        </form>
        `);
});

app.post("/redirect-post", (req, res) => {
    res.redirect(307, `https://phonetool.amazon.com/users/${req.body.username}/communities/10426/join`);
});

app.listen(3000);

