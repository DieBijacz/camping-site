import db from '../db.js'

export const createAccount = (req, res) => {
  const sql = `INSERT INTO users SET ?`
  const values = {
    "name": "Mateusz Stanilewicz",
    "email": "mastanilewicz@gmail.com",
    "password": "123",
  }
  db.query(sql, values, (error, data) => {
    if (error) throw error
    console.log(data)
    return res.json(data)
  })
}

export const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM users'
  db.query(sql, (error, data) => {
    if (error) throw error
    console.log(data)
    return res.json(data)
  })
}

export const getUserById = (req, res) => {
  const sql = `SELECT * FROM users WHERE id = ${req.body.id}`
  db.query(sql, (error, data) => {
    if (error) throw error
    console.log(data)
    return res.json(data)
  })
}