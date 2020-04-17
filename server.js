const express = require("express");
const app = express();
const PORT = 5000;

app.listen(5000, () => console.log(`listening on port ${PORT}!`));

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api/category", require("./routes/api/category"));
