const Agenda = require("agenda");
const db = require("../models");

const agenda = new Agenda({
  db: {
    address:db.url, 
    collection: 'cronJobs',
    options:{
      useUnifiedTopology: true
    }
  },
  processEvery: "30 seconds",
  disableAutoIndex:true
});

const Testing = async () => {

    await agenda.define("TESTING", { priority: "high", concurrency: 10 }, function (job, done) {
    console.log("Hello World");
    return done();
  });
};

module.exports = {
  agenda,
  Testing,
};
