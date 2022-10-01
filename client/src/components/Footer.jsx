import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id='footer' className='bg-light mt-5'>
      <Container className='d-flex justify-content-center flex-column align-items-center p-3'>
        <div className='logo'>Camping Site</div>
        <div className='text-muted'>Copyright  &copy; 2022</div>
      </Container>
    </footer>
  )
}

export default Footer