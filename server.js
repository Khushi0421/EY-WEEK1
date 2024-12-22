<<<<<<< HEAD
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

//configure env
dotenv.config();

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to mern stack project</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port${PORT}`.bgGreen.red
  );
});
//acSd2JBDcBcQTX6G--password username--> khushiss2004
//add new user database--> password--> khushi@21S  username--> khushi21
//223.237.21.170/32--> previous ip address
=======
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

//configure env
dotenv.config();

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to mern stack project</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port${PORT}`.bgGreen.red
  );
});
//acSd2JBDcBcQTX6G--password username--> khushiss2004
//add new user database--> password--> khushi@21S  username--> khushi21
//223.237.21.170/32--> previous ip address
>>>>>>> e89003d (first commit)
