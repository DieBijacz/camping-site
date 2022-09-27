import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Card className='shadow w-50 p-5 mt-5'>
        <h1 className='title'>Login</h1>
        <Form>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' />
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