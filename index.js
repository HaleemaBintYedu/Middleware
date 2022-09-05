const express = require("express");
const userRouter = require("./routes/users.route");

const app = express();

app.get("./", (req, res) => {
    res.status(200).send("server is ready to run")
});

app.use("/ users", userRouter);

app.listen(4000, (err) => {
    console.log("server start running https://localhost:4000");
});
