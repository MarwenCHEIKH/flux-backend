const express = require("express");
const cors = require("cors");
const vfdRoutes = require("./routes/vfdRoutes");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/", vfdRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
