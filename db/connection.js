require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to MongoDB"))
  .on("close", () => console.log("Your are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
