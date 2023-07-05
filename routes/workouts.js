const express = require('express')

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth before all other workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

//add a workout
router.post('/', createWorkout)

//remove a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)

module.exports = router
