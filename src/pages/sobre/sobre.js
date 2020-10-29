import React, { Component } from 'react';
import './sobre.css';


class Sobre extends Component {
    render() {
        return (
        <div className=' container mb-2 text-center bg2 texto'>
            <h1>Quem somos</h1>
            <div class="row">
            <div class="col-6 col-md-4"></div>
            <div class="col-6 col-md-4"></div>
            <div class="col-6 col-md-4"></div>
            </div>
            <div class="row align-items-start">
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
    <div class="col">
      Uma de três colunas
    </div>
  </div>
                

            
        </div>               

        

        );
    }
}




export default Sobre;