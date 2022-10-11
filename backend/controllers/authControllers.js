import db from "../db.js"
import bcrypt from 'bcryptjs'

export const register = (req, res) => {
  const { email, password } = req.body

  // VALIDATE
  const sql = "SELECT * FROM users WHERE email = ?"
  return db.query(sql, [email], (error, data) => {
    if (error) return res.json(error)
    if (data.length > 0) return res.status(409).json('User already exist')
    createNewUser(email, password)
  })

  // CREATE NEW USER
  function createNewUser(email, password) {
    console.log('here')
    // hash the password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const sql = "INSERT INTO users(`email`, `password`) VALUES (?)"
    const values = [email, hashedPassword]
    db.query(sql, [values], (error, data) => {
      if (error) throw error
      return res.status(200).json('User has beed created')
    })
  }
}

export const login = (req, res) => {

}
export const logout = (req, res) => {

}

