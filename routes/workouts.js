const express = require('express')

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'get all workouts' })
})

//get single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'get a single workout' })
})

//add a workout
router.post('/', (req, res) => {
  res.json({ mssg: 'post a workout' })
})

//remove a workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'remove a workout' })
})

//update a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'update a workout' })
})
module.exports = router
