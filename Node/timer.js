const schedule = require("node-schedule")

// Runs on Monday from 5 pm every 5 seconds
const task1 = schedule.scheduleJob("*/5 * 17 * * 1", function() {
    console.log("Running Task 1!", new Date().getSeconds())
})

setTimeout(function() {
    task1.cancel()
    console.log("Canceling the Task 1!")
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)] // Runs from Monday to Friday
// Runs every 30 seconds after 17 hours
rule.hour = 17
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
    console.log("Running Task 2!", new Date().getSeconds())
})