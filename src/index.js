const express = require("express");

const app = new express();
const port = 4500;

app.get("/api/v1/home", async (req, res) => {
  res.status(200).json({ msg: "you have reached the home page of nodejs app" });
});
app.post("/api/v1/data", async (req, res) => {
  try {
    const data = req.body();
    console.log(data);
    res.status(200).json({ msg: `Your data is ${data}` });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  res.status(200).json({ msg: "you have reached the home page of nodejs app" });
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
