import express from 'express'
import { createAccount, getAllUsers, getUserById } from '../controllers/userControllers.js'

const router = express.Router()

router.post('/createAccount', createAccount)
router.get('/', getAllUsers)
router.route('/:id')
  .get(getUserById)

export default router