const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ Error: error.message })
  }
}

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
  const { id } = req.params

  //ID validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid workout ID' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: 'workout not found' })
  }

  res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params

  //ID validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid workout ID' })
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(404).json({ error: 'workout not found' })
  }
  res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
  const { id } = req.params

  //ID validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid workout ID' })
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!workout) {
    return res.status(404).json({ error: 'workout not found' })
  }

  res.status(200).json(workout)
}

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
}
