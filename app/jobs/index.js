const { agenda, Testing } = require("./AgendaJobs");
// const {  autoSwapSessions,} = require("./SessionJobs");


agenda.on("ready", (job) => {
    Testing()
//   autoSwapSessions()
  agenda.start();
});

module.exports = agenda;
