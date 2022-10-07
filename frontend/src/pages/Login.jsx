import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler() {
    console.log(email, password)
  }

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Card className='shadow p-5 mt-5 login-card'>
        <h1 className='title'>Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control required type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type='submit' size='lg' className='dark-btn'>Login</Button>
          </div>
          <div className='w-100 text-center mt-3'>
            <div>Don't have an account yet?</div>
            <Link to='/register'>Go to Register</Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Login