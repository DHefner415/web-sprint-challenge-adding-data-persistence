const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.getAll()
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newTask = await Tasks.add(req.body)
    res.status(201).json(newTask)
  } catch (err) {
    next(err)
  }
})

module.exports = router
