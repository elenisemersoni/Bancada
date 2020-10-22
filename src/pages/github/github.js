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

<div className="container">
                 <div className="row bg1">
                    <div className="col-md-3 col-12">
                        <p className="titulo">Meu GitHub Infos</p>
                        <div>
                            <img  className="circle-photo" src={user.avatar_url} alt="Profile photo"></img>
                            <div className='card bg-card2 '>
                                <span className="font-weight-bold ml-1">Login:</span> @{user.login} <br/>
                                <span className="font-weight-bold ml-1">Name:</span> {user.name} <br/>
                                <span className="font-weight-bold ml-1">Company:</span> {user.company} <br/>
                                <span className="font-weight-bold ml-1">Location:</span> {user.location} <br/>
                                <div className="row">
                                    <div className="col-6 ml-1">
                                        Seguidores
                                        <p>{user.followers}</p>
                                    </div>
                                    <div className="col-6 ml-1">
                                        Seguindo
                                        <p>{user.following}</p>
                                    </div>
                                   
                                </div>
                                <p className='ml-1'>
                                        Bio:<br/>
                                        {user.bio}
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-12">
                    {repo.map(
                        repositorio => 
                            <div className="card bg-card">
                                Nome do Repositorio: {repositorio.name} <br/>
                                Descrição: {repositorio.deion} <br/>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </div>
                    )}
                    </div>
                </div>
           </div>
        </>; 

    };

}



export default Github;