import express from "express";
import db from './db.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())

db.connect((error) => {
  if (error) throw error
  console.log('Mysql connected')
})

app.use('/users', userRoutes)
// app.use('/booking', bookingRoutes)

app.listen(5000, () => {
  console.log('App listens on 5000')
})