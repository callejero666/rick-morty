import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {
  const {characters, setcharacters} = useState(null)

  const reqapi = async () => {
  const api = await fetch('https://rickandmortyapi.com/api/character'); 
  const characterapi = await api.json();
  console.log(characterapi);
  setcharacters(characterapi.results);
};

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty </h1>
      <img src={imgRickMorty} alt="Rick & Morty" className='img-home' ></img>
      <button onClick={reqapi} className='btn-search'>Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
