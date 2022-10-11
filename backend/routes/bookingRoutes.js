import express from 'express'
import { getAllBookings } from '../controllers/bookingsControllers.js'

const router = express.Router()

router.route('/')
  .get(getAllBookings)

export default router