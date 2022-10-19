import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import Cards from '../components/Card'
const Pokemon = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setData(state => {
        state = [...state, result.data]
        // state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }
  useEffect(() => {
    pokeFun();
  }, [url])
  return (
    <Container>
      <Row className='mt-2'>
        <Cards pokemon={data} loading={loading} />
      </Row>
      <ButtonGroup className='my-3'>
        {prevUrl &&
          <Button onClick={() => {
            setData([])
            setUrl(prevUrl)
          }} variant="primary">Prev</Button>
        }
        {' '}
        {
          nextUrl &&
          <Button onClick={() => {
            setData([])
            setUrl(nextUrl)
          }} variant="primary">Next</Button>
        }
      </ButtonGroup>

    </Container>
  )
}

export default Pokemon
