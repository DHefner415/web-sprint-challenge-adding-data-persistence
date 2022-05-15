const express = require('express')
const server = express()
const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
// const taskRouter = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
// server.use('/api/tasks', taskRouter)

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
