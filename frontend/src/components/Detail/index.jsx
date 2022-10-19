import React, { useEffect, useState } from 'react';
import { Badge, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Loading from '../loading';

const Detail = ({ data, loading }) => {
  const [id, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setData(data.id);
  }, [data])

  const submitTangkap = async (e) => {
    e.preventDefault();
    const pokemon = await axios.get(`http://localhost:4000/api/v1/pokemon/${id}`);
    const nick = `Mighty ${data.name}-${pokemon.data.data.length}`;
    const poke = await axios.post('http://localhost:4000/api/v1/pokemon', {
      idPokemon: data.id,
      nickname: nick
    })
    navigate('/my', poke.data);
  }
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
          <form onSubmit={submitTangkap}>
            <Button type="submit" className="my-2" variant="success">Tangkap</Button>
          </form>
        </>
      }
    </div>
  )
}

export default Detail
