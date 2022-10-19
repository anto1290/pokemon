import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/loading';

const MyPokemon = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const pokefun = async () => {
    setLoading(true);
    const poke = await axios.get('http://localhost:4000/api/v1/pokemon');
    getPokemon(poke.data.data);
    setLoading(false);
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.idPokemon}`)
      const data = { ...result.data, 'nickname': item.nickname }
      setData(state => {
        state = [...state, data]
        return state;
      })
    })
  }
  useEffect(() => { pokefun() }, [])

  return (
    <Container>
      <Button className='my-4' onClick={() => navigate('/')} variant="success">Back</Button>
      <br></br>
      {loading ? <Loading /> : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                images
              </th>
              <th>
                Nickname
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr>
                <td>
                  <img width={100} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt={`${item.name} gambar`} />
                </td>
                <td>
                  {item.nickname}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default MyPokemon
