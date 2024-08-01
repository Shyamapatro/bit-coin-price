const express = require("express");
const bodyParser = require("body-parser");
const Agenda = require("agenda");
const basicAuth = require("express-basic-auth");
const db = require("./app/models");
const app = express();
const agenda = require('./app/jobs')
const Agendash = require("agendash");
app.use(bodyParser.urlencoded({ extended: true }));

async function connectDB() {
  const options = {
    useNewUrlParser: true,
  };

  try {
    console.log("Connecting to MongoDB...");
    db.mongoose
      .connect(db.url, options)
      .then(() => {
        console.log("Connected to the database!");
      })
      .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });

    db.mongoose.connection.on("disconnected", function () {
      console.log("MongoDB disconnected");
    });

    db.mongoose.connection.on("reconnected", function () {
      console.log("MongoDB reconnected");
    });

    db.mongoose.connection.on("error", function (err) {
      console.log("MongoDB error: " + err);
    });
  } catch (err) {
    console.error("Cannot connect to the database!", err);
    process.exit();
  }
}
connectDB();

// Agenda Dashboard
app.use(
  "/dash",
  basicAuth({ users: { user: "user" }, challenge: true }),
  Agendash(agenda)
);

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is up and running");
});

// Routes
require("./app/routes/Stock/stock")(app);
let PORT=process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
