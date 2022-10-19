import React from 'react'
import { Badge, Button, ListGroup } from 'react-bootstrap'
import Loading from '../loading'

const Detail = ({ data, loading }) => {

  return (
    <div className='flex justify-content-center px-4 mt-4'>
      {loading ? (<div className='flex justify-content-center align-content-center'>
        <Loading />
      </div>) :
        <>

          <h1>{data.name}</h1>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={`${data.name} gambar`} />
          <div>
            <h2>Abilities :</h2>
            {
              data.abilities.map(poke => {
                return (
                  <>
                    <Badge pill bg="danger" className="mx-2 p-2">
                      <h5>{poke.ability.name}</h5>
                    </Badge>
                  </>
                )
              })
            }
          </div>
          <h2>Stat :</h2>
          <ListGroup variant="flush">
            {
              data.stats.map(poke => <ListGroup.Item>{poke.stat.name}:{poke.base_stat}</ListGroup.Item>)
            }
          </ListGroup>
          <Button className="my-2" variant="success">Tangkap</Button>
        </>
      }
    </div>
  )
}

export default Detail
