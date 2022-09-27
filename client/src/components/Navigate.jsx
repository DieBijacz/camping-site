import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <Navbar className='w-100 d-flex align-center justify-content-between' id='navbar'>
      <Container>
        <Link to='/' className='logo'>Camping Site</Link>
        <div className='d-flex gap-5'>
          <Link to="/write">Write</Link>
          <Link to="/login">Login</Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigate