import React, { Component } from 'react';
import './sobre.css';
import oned  from '../../img/oned.PNG';
import doismil from '../../img/doismil.PNG';
import nostalgia from '../../img/nostalgia.PNG';

class Sobre extends Component {
    render() {
        return (
        <div className=' container mb-2 text-center bg2 texto'>
            <h1 className='mb-3'>Playlists</h1>
            <div class="row">
            <div class="col-6 col-md-4 mb-5">
              <a href='https://open.spotify.com/playlist/43ihp6l5sjcrVvE3tP7xkC?si=Kq6O6tQtRr-awsudKjmMAA'>
                <img src={oned}></img> </a> </div>
            <div class="col-6 col-md-4 mb-5">
            <a href='https://open.spotify.com/playlist/2Y2XHlhB1CuKqpQr37Mkqs?si=Y23z7fdZTE6tmu7N9v5u7A'>
                <img src={nostalgia}></img> </a> 
            </div>
            <div class="col-6 col-md-4 mb-5">
            <a href='https://open.spotify.com/playlist/4Su1jYJ9b2rbl6XVc4uXOa?si=fVLbaXx2TVGnoTMQN8MU8Q'>
                <img src={doismil}></img> </a> 
            </div>
            </div>
            
        </div>               

        

        );
    }
}




export default Sobre;