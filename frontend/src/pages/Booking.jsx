import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Booking = () => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <Container>
      <h1 className='mt-3'>Booking</h1>
      <Row>
        <Col>
        </Col>
        <Col>
          <Calendar className='m-auto' onChange={onChange} value={value} />
        </Col>
      </Row>
    </Container>
  )
}

export default Booking