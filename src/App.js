import React from 'react';
// import logo from './logo.svg';
import Github from './pages/github/github';
import Apidragon from './pages/apidragon/apidragon';
import './App.css';
import Footer from './pages/footer/footer';


function App() {
  return (
    <div >
     <Github></Github>
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