const router = require('express').Router()
const Resources = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const source = await Resources.getAll()
    res.status(200).json(source)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newSource = await Resources.add(req.body)
    res.status(201).json(newSource)
  } catch (err) {
    next(err)
  }
})

module.exports = router
