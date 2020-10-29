import React from 'react';
// import logo from './logo.svg';
import Github from './pages/github/github';
import Apidragon from './pages/apidragon/apidragon';
import Sobre from './pages/sobre/sobre';
import './App.css';
import Footer from './pages/footer/footer';
import Contato from './pages/contato/contato';
import Filmes from './pages/filmes/filmes';
import Livros from './pages/livros/livros';
import Cabeçalho from './pages/cabeçalho/cabeçalho';

function App() {
  return (
    <div >

    <Cabeçalho></Cabeçalho>
      <nav className='text-center corfundo textocor '>
              <a className='mx-2 textocor'href= '#Home'>Home</a>
              <a className='mx-2 textocor' href= '#Contato'>Perfil</a>
              <a className='mx-2  textocor' href= '#Sobre'>Playlists</a>
              <a className='mx-2 textocor' href= '#Livros'>Livros</a>
              <a className='mx-2 textocor' href= '#Filmes'>Filmes</a>
              <a className='mx-2 textocor' href= '#Dragon'>Dragon</a>
              <br></br>
             
              </nav>
     <Github>
     <div id='Home'></div>
            <div class='Home'></div>
     </Github>
     <Contato>
          <div id='Contato'></div>
            <div class='Contato'></div>
     </Contato>
     <Sobre>
     <div id='Sobre'></div>
            <div class='Sobre'></div>
     </Sobre>
     <Livros>
     <div id='Livros'></div>
            <div class='Livros'></div>
     </Livros>
     <Filmes>
     <div id='Filmes'></div>
            <div class='Filmes'></div>
     </Filmes>
     <Apidragon>
     <div></div>
            <div class='dragon'></div>
     </Apidragon>
     <Footer></Footer>

    </div>
  );
}

export default App;




/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */