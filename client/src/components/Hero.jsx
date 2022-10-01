import React from 'react'
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div id='hero'>
      <Container>
        <div id='hero-text'>
          <h1>Make first Step</h1>
          <p>Book your place to stay</p>
          <Button variant='dark'>Book now <FontAwesomeIcon icon={faArrowRight} className='ms-2' /></Button>
        </div>
        <Container className="cards">
          <Card className='hero-card shadow'>
            <h1>Card 1</h1>
            <img src='../src/assets/images/namiot.png' alt="namiot" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, vero.
          </Card>
          <Card className='hero-card shadow'>
            <h1>Card 1</h1>
            <img src='../src/assets/images/lornetka.png' alt="lornetka" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, vero.
          </Card>
          <Card className='hero-card shadow'>
            <h1>Card 1</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, vero.
          </Card>
        </Container>
      </Container>
    </div>
  )
}

export default Hero