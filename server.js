require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require("morgan");
// const cheeseController = require("./controllers/cheeseeController");
const cheeseController = require("./controllers/cheeseController")
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true}));

app.use("/cheese", cheeseController);
app.listen(PORT, () => console.log("Cheese coolin on port", PORT))