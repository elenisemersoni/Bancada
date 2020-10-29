import React, { Component } from 'react';
import './livros.css';
import caraval from '../../img/caraval.PNG';
import codigo from '../../img/codigo.PNG';
import rainha from '../../img/rainha.PNG';

class Livros extends Component {
    render() {
        return (
        <div className=' container mb-2 text-center bg2 texto'>
            <h1 className='mb-3'>Livros</h1>
            <div class="row">
            <div class="col-6 col-md-4 mb-5">
              <a href='https://www.amazon.com.br/Caraval-Stephanie-Garber/dp/8581638562/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=caraval&qid=1604002304&s=books&sr=1-1'>
                <img src={caraval}></img> </a> </div>
            <div class="col-6 col-md-4 mb-5">
            <a href='https://www.amazon.com.br/s?k=rainha+vermelha&i=stripbooks&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss'>
                <img src={rainha}></img> </a> 
            </div>
            <div class="col-6 col-md-4 mb-5">
            <a href='https://www.amazon.com.br/s?k=c%C3%B3dico+da+vinci&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=I632CNSAK4O3&sprefix=c%C3%B3dico+da+vi%2Cstripbooks%2C345&ref=nb_sb_ss_fb_1_12'>
                <img src={codigo}></img> </a> 
            </div>
            </div>
            
        </div>               

        

        );
    }
}




export default Livros;