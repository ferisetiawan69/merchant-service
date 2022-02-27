const express = require("express");
const indexRouter = require("./app/routes/index")

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
});