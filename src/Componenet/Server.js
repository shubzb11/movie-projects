const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const moviesData = require("./movies.json");

app.use(bodyParser.json());

app.get("/api/movies", (req, res) => {
  res.json(moviesData);
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post("/api/movies", (req, res) => {
  const { name, rating, releasedDate } = req.body;

  if (!name || !rating || !releasedDate) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields." });
  }

  // Add the new movie to the list
  const newMovie = {
    name,
    rating,
    releasedDate,
  };

  moviesData.push(newMovie);

  res.status(201).json(newMovie);
});
