import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading'
const Cards = ({ pokemon, loading }) => {
  const navigation = useNavigate()
  return (
    <>
      {
        loading ? <Loading /> : pokemon.map((item, index) => {
          return (
            <>
              <Card key={index} className='mx-2' style={{ width: '14rem' }} onClick={() => navigation(`/${item.id}`)} >
                <Card.Img variant="top" src={item.sprites.front_default} alt="" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <p className='text-black fw-bold'>Status</p> {item.stats.map((itm, idx) => {
                      return (
                        <>
                          <Row key={idx} >
                            <Col>
                              <p >{itm.stat.name}</p>
                            </Col>
                            <Col>
                              <p >{itm.base_stat}</p>
                            </Col>
                          </Row>
                        </>
                      )
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          )
        })

      }
    </>
  )
}

export default Cards
