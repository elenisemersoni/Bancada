import React, { Component } from 'react';
import './filmes.css';
import enola from '../../img/enola.PNG';
import animais from '../../img/animais.PNG';
import noiva from '../../img/noiva.PNG';
import forrest from '../../img/forrest.PNG'

class Filmes extends Component {
    render() {
        return (
        <div className=' container mb-2 text-center bg2 texto'>
            <h1 className='mb-3'>Filmes</h1>
            <div class="row">
            <div class="col-6 col-md-6 mb-5">
              <a href='https://www.youtube.com/watch?v=rcV1I-397Wg'>
                <img src={enola}></img> </a> </div>
            <div class="col-6 col-md-6 mb-5">
            <a href='https://www.youtube.com/watch?v=ZE5CbXVheJk'>
                <img src={noiva}></img> </a> 
            </div>
            <div class="col-6 col-md-6 mb-5">
            <a href='https://www.youtube.com/watch?v=TiaxfJ7QrIo'>
                <img src={animais}></img> </a> 
            </div>
            <div class="col-6 col-md-6 mb-5">
              <a href='https://www.youtube.com/watch?v=p0p5CQUjTxI'>
                <img src={forrest}></img> </a> </div>
            </div>
            
        </div>               

        

        );
    }
}



export default Filmes;
