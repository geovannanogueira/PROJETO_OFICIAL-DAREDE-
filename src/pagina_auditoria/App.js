import React from 'react';
import Axios from 'axios';

import Nav from '../components/Nav/nav';

import './App.css';
// import logo from '../imagens/logoOficial.png';

export default class App extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         lista: [],
    //         reposta: null,
    //         servicoBuscado: []        
    //     }
    // }

    // componentDidMount(){
    //     this.listarServicos();
    // }

    // listarServicos = () =>{
    //     Axios.get('')
    //     .then(response => {
    //         this.setState({ lista: response.data })
    //         console.log({ lista: response.data })
    //     })
    // }

    // _filtrarResposta = async () => {
    //     // verificar se a pessoa digitou algo
    //     // caso nao tenha digitado, chamar o listarServicos

    //     await fetch('',
    //         .then(a => a.json())
    //         .then(data => {
    //             let respostaDoUsuario = data.filter(element => {
    //                 return element.lista == this.state.resposta;
    //             });
    //             this.setState({ servicoBuscado: respostaDoUsuario })

    render() {
        return (
            <div className="tela_servicos">
                <header className="container">
                    {/* <img src={logo} className="logo" /> */}
                    <Nav/>
                    <div id="titulo">
                        {/* <h1 className="classeTitle">Nossos Serviços</h1> */}
                    </div>
                    {/* <input 
                    // onChange={resposta => this.setState({ resposta })} value={this.state.resposta}
                    /> */}
                    {/* <button 
                    // onPress={this.listarServicos}
                    >Buscar
                    </button> */}
                    <div id="caracteristicas">
                        <div id="nome">
                            {/* <p className="nome"><strong>Nome do serviço:</strong></p> */}
                        </div>
                        <div id="descricao">
                            {/* <p className="descricao"><strong>Descrição:</strong></p> */}
                        </div>
                        <div id="valor">
                            {/* <p className="valor"><strong>Valor:</strong></p> */}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
