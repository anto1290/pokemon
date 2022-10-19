import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'

const Detailpokemon = () => {
  const params = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pokeFunDetail = async () => {
    setLoading(true)
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    setData(res.data);
    setLoading(false)
  }
  useEffect(() => {
    pokeFunDetail();
  }, [params])
  return (
    <div>
      <Detail data={data} loading={loading} />
    </div>
  )
}

export default Detailpokemon
