import React from 'react'
import Hero from '../components/Hero'
import { Row, Col, Container, Card, Image } from 'react-bootstrap'
import locationImage from '../assets/images/location.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'Adventure',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsa.',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-ideas-1561136670.jpg',
      date: '22.05.2021'
    },
    {
      id: 2,
      title: 'Adventure',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsa.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihLFG0QHMXA5ZsI5BkqKAL2aBr_o_YbGC4OEQzG9TF_E1htDhe-6cLvD6750TjUQOs6w&usqp=CAU',
      date: '22.05.2021'
    },
    {
      id: 3,
      title: 'Adventure',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsa.',
      image: 'https://media.timeout.com/images/105658195/image.jpg',
      date: '22.05.2021'
    },
    {
      id: 4,
      title: 'Adventure',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsa.',
      image: 'https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_auto/homepage/uk/home_hero.jpg',
      date: '22.05.2021'
    },
  ]

  return (
    <div>
      <Hero />
      <Container>
        <h1>Your Photos:</h1>
        <Row className='mt-5 d-flex'>
          {posts.map(post => (
            <Col key={post.id} >
              <Link to={`/posts/${post.id}`}>
                <Card className='shadow user-galery-card text-muted'>
                  <Card.Header>
                    {post.title}
                  </Card.Header>
                  <Card.Body>
                    <Image rounded fluid src={post.image} alt='adventure pics'></Image>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row className='mt-5'>
          <h1>Contact Us</h1>
          <Row>
            <Col>
              <Image src={locationImage} alt="location" fluid />
            </Col>
            <Col>
              <Card className='d-flex flex-column gap-3 p-3'>
                <h4>Address:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque.</p>
                <h4>Address:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque.</p>
                <h4>Address:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque.</p>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div >
  )
}

export default Home