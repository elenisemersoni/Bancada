import React from 'react';
// import logo from './logo.svg';
import Github from './pages/github/github';
import Apidragon from './pages/apidragon/apidragon';
import Sobre from './pages/sobre/sobre';
import './App.css';
import Footer from './pages/footer/footer';
import Contato from './pages/contato/contato'

function App() {
  return (
    <div >
      <nav className='text-center corfundo textocor '>
              <a className='mx-2 textocor'href= 'Home'>Home</a>
              <a className='mx-2  textocor' href= 'Sobre'>Sobre</a>
              <a className='mx-2 textocor' href= 'Contato'>Contato</a>
              <a className='mx-2 textocor' href= 'Serviços'>Serviços</a>
              <a className='mx-2 textocor' href= 'Parceiro'>Parceiros</a><br></br>
              </nav>
     <Github></Github>
     <Contato></Contato>
     <Sobre></Sobre>
     <Apidragon></Apidragon>
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