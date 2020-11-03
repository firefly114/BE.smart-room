/* eslint-disable no-console */
const mongoose = require("mongoose");
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0-ykk0d.mongodb.net/smart-room?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to mongo"));

module.exports = mongoose;
