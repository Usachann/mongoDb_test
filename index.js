// const express = require("express");
// const mongoose = require("mongoose");
// const movieRoutes = require("./routes/movie-routes");

// const PORT = 3000;
// // const URL = "mongodb://localhost:27017/moviesbox";
// const URL =
//   "mongodb+srv://marikrim:marikrim1@cluster0.wnljeup.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";
// const app = express();
// app.use(express.json());

// mongoose
//   .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((res) => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(`DB connection error: ${err}`));

// app.listen(PORT, (err) => {
//   err ? console.log(err) : console.log(`listening port ${PORT}`);
// });

// app.use(movieRoutes);
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use("/api/users", userRoutes);
