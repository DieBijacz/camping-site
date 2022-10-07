import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Navigate = () => {
  return (
    <>
      <div className='bg-dark text-muted' id='top-navbar'>
        <Container className='d-flex justify-content-between align-items-center'>
          <Link to='/location' className='d-flex align-items-center gap-1 text-muted'>Map tag <FontAwesomeIcon icon={faLocationDot} /></Link>
          <div className='d-flex gap-3 align-items-center'>
            <div>Email: campingsite@gmail.com</div>
            <div>Phone: 07732817630</div>
          </div>
        </Container>
      </div>
      <Navbar sticky='top' className='w-100 bg-light shadow' id='navbar' expand='sm'>
        <Container>
          <Link to='/' className='logo'>Camping Site</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-5">
              <Link to="/galerry">Gallery</Link>
              <Link to="/write">Write</Link>
              <Link to="/booking">Book now</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigate