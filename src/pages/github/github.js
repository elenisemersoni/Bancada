import React, { Component } from 'react';
import './github.css';

class Github extends Component {
    constructor() {

        super(); 
        this.state = {
            user: [],
            repo: [],
        };

    }

    componentDidMount (){
        fetch('https://api.github.com/users/elenisemersoni') //Esse comando pega as infos da api github
        .then( response => response.json() )//Esse comando converte as infos para o formato json
        .then(data => {this.setState( {user:data}); } ); //Esse comando coloca o valor data dentro do atributo user

        fetch('https://api.github.com/users/elenisemersoni/repos') 
        .then( response => response.json() )
        .then(data => {this.setState( {repo:data}); } );

    }

    render(){
        const {user,repo} = this.state;
      
        return <>

                <div className='row '>
                    <div className= 'col-3  bg1'>
                        <br/>
                        <p className='text-center'>Github Infos</p>
                        <img className='ml-1' src={user.avatar_url}></img>
                        <br></br>
                        <br></br>
                        <p>User: {user.login} </p> 
                        <p>Twitter:{user.twitter_username}</p>
                        <p>Name: {user.name}</p>
                        <p>Local:{user.location}</p>
                    </div>

                     <div className='col-9'>
                         <br></br>
                        {repo.map(repositorio => 
                            <p> Nome do Repositório: {repositorio.name}<br/>
                                Descrição: {repositorio.descripition}<br/>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </p> 
                            )}

                        

                     </div>

                 </div>
           
        </>; 

    };

}



export default Github;