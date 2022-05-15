const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const proj = await Project.getAll()
    res.status(200).json(proj)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const byId = await Project.getById(req.params.id)
    res.json(byId)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProj = await Project.add(req.body)
    res.status(201).json(newProj)
  } catch (err) {
    next(err)
  }
})

module.exports = router
