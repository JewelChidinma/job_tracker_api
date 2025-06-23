const express = require("express")
const app = express()
const jobRoutes = require ("./routes/jobRoutes")

app.use(express.json())
app.use("/api/v1/jobs", jobRoutes)

app.get("/", (req, res) => {
    res.end("Job Tracker app is running")

})

module.exports = app