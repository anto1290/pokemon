import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Detailpokemon from './pokemon/detailpokemon';
import MyPokemon from './pokemon/mypokemon';
import Pokemon from './pokemon/pokemon';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/my" element={<MyPokemon />} />
        <Route path="/:id" element={<Detailpokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
