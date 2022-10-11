import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap'

const Register = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs)
      const res = await axios.post('/auth/register', inputs)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Card className='shadow p-5 mt-5 login-card'>
        <h1 className='title'>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control required type='email' name='email' placeholder='Enter email' onChange={handleChange} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' name='password' placeholder='Enter password' onChange={handleChange} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='confirmPassword'>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control required type='password' name='confirmPassword' placeholder='Confirm password' onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check required label="Agree to terms and conditions" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type='submit' size='lg' className='dark-btn'>Create account</Button>
          </div>
          <div className='w-100 text-center mt-3'>
            <Link to='/login'>Go to Login</Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}
export default Register