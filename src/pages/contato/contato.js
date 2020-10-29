import React, { Component } from 'react';
import './contato.css';
import img from '../../img/wcolor.jpg';
import imgg from '../../img/rotating_card_profile.jpg';
class Contato extends Component {
    render() {
        return (
            <div className="card-container container">
         <div class="card">
             <div class="front">
                 <div class="cover">
                     <img src={img}></img>
                 </div>
                 <div class="content">
                     <div class="main">
                         <h3 class="name">Elenise Mersoni</h3>
                         <p class="profession">22 anos</p>
                        <p class="text-center">” A arte de programar consiste em organizar e dominar a complexidade. “ - Edsger W. Dijkstra</p>
                        <img className='ml-5 circle-photo2' src={imgg}></img>
                     </div>
                     <div class="footer">
                         <div class="rating">
                             <i class="fa fa-mail-forward"></i> 
                         </div>
                     </div>
                 </div>
             </div> 
             <div class="back">
                 <div class="header">
                     <h5 class="motto">"Eu adoraria mudar o mundo, mas não me deram o código-fonte"</h5>
                 </div>
                 <div class="content">
                     <div class="main">
                         <h4 class="text-center">Conhecimentos</h4>
                         <p class="text-center">Adobe Photoshop, HTML5, CSS3, JavaScript, React, Bootstrap, Json</p>
                        <img className='ml-5 circle-photo' src={imgg}></img>

                     </div>
                 </div>
                
             </div> 
         </div> 
     </div> 
        );
    }
}
export default Contato;