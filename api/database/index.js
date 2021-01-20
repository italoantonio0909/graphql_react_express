const mongoose = require("mongoose");

const mongo = "mongodb://localhost/store";
mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connection) => console.log("Database is connected"));
