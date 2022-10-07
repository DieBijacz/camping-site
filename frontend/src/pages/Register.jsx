import React from 'react'
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Card className='shadow p-5 mt-5 login-card'>
        <h1 className='title'>Register</h1>
        <Form>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control required type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' placeholder='Enter password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control required type='password' placeholder='Confirm password' />
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