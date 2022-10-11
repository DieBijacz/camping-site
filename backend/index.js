import express from "express";
import db from './db.js'
import userRoutes from './routes/userRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()
app.use(express.json())

db.connect((error) => {
  if (error) throw error
  console.log('Mysql connected')
})

app.get('/test', (req, res) => {
  res.json('dziala')
})

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingRoutes)

app.listen(5000, () => {
  console.log('App listens on 5000')
})