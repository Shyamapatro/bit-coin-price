const { agenda, Testing } = require("./AgendaJobs");


agenda.on("ready", (job) => {
  Testing()
  agenda.start();
});

module.exports = agenda;
