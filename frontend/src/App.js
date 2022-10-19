import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Detailpokemon from './pokemon/detailpokemon';
import Pokemon from './pokemon/pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/:id" element={<Detailpokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
