import React,{Component} from 'react';
import './footer.css';
import facebook from '../../img/facebook-icon.png';
import instagram from '../../img/instagram-icon.png';
import telegram from '../../img/telegram-icon.png';
import twitter from '../../img/twitter-icon.png';
import whatsapp from '../../img/whatsapp-icon.png';

class Footer extends Component {
    render() {
        return (
        <footer className='pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p>Redes Sociais</p>
                        <div className='row img '>
                            <a href='https://www.facebook.com'><img src={facebook}></img></a>
                            <a href='https://www.instagram.com'><img src={instagram}></img></a>
                            <a href='https://telegram.org'><img src={telegram}></img></a>
                            <a href='https://www.twitter.com'><img src={twitter}></img></a>
                            <a href='https://telegram.org/'><img src={whatsapp}></img></a>
                        </div>
                    </div>
                    
                    <div className='col'>
                       <p className='contato1'>Contatos</p>
                       <p className='contato2'> Telefone:  <a href='tel:51993439138'>(51) 99343-9138</a></p>
                       <p className='contato2'>E-mail:  <a href='mailto:elenisermersoni@gmail.com'>elenisermersoni@gmail.com</a></p><br></br>
                    </div>
                    <div className='col pb-2'>
                        <p className='endereco1'>Endereço:</p>
                        <p className='endereco '>
                            Avenida Farroupilha, 2000<br></br>
                            Moinhos de Vento<br></br>
                            Canoas - RS <br></br>
                            Brasil
                            </p></div>
                </div>
            </div>
            <p className='copyright pb-2'>Copyright@2020 - Elenise Mersoni</p>

        </footer>
        );
    }
}







export default Footer;