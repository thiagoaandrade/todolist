const express = require('express')
const path = require('path')
const tasksRoute = require('./routes/tasks')

const app = express()

app.use(express.json())
app.use('/api/tasks', tasksRoute)

app.get('/', (req,res) => {
    res.status(200).sendFile(path.resolve('./test.html'))
})

module.exports = app