import React from 'react';
import Axios from 'axios';

import Nav from '../components/Nav/nav';

import './App.css';
import logo from '../imagens/daredePNG.png';

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
            // <div className="tela_servicos">
            //     <header className="container">
            //         {/* <img src={logo} className="logo" /> */}
            //         <Nav/>
            //         <div id="titulo">
            //             {/* <h1 className="classeTitle">Nossos Serviços</h1> */}
            //         </div>
            //         {/* <input 
            //         // onChange={resposta => this.setState({ resposta })} value={this.state.resposta}
            //         /> */}
            //         {/* <button 
            //         // onPress={this.listarServicos}
            //         >Buscar
            //         </button> */}
            //         <div id="caracteristicas">
            //             <div id="nome">
            //                 {/* <p className="nome"><strong>Nome do serviço:</strong></p> */}
            //             </div>
            //             <div id="descricao">
            //                 {/* <p className="descricao"><strong>Descrição:</strong></p> */}
            //             </div>
            //             <div id="valor">
            //                 {/* <p className="valor"><strong>Valor:</strong></p> */}
            //             </div>
            //         </div>
            //     </header>
            // </div>
            <header>
                <div className="header">
                    <div className="header__logo">
                        <img src={logo} className="header__logo-img" />
                    </div>
                    <nav className="header__nav">
                        <a href="#" className="header__nav-link">Serviços</a>
                        <a href="#" className="header__nav-link">Clientes</a>
                    </nav>
                </div>
                <div className="clientes">
                    <section className="clientes__content">
                        <h3 className="clientes__content-title">
                            Nossos clientes
                        </h3>
                        <div className="clientes__content-items">
                            <div className="clientes_content-card">
                                <p className="text-right">26/06/2000</p>
                                <p><b>Usuário:</b>Roberto</p>
                                <p><b>Empresa:</b>ViaCloud</p>
                                <p><b>Serviço:</b>Lambda</p>
                                <p className="text-green text-right">R$150,00</p>
                            </div>
                            <div className="clientes_content-card">
                                <p className="text-right">26/06/2000</p>
                                <p><b>Usuário:</b>Roberto</p>
                                <p><b>Empresa:</b>ViaCloud</p>
                                <p><b>Serviço:</b>Lambda</p>
                                <p className="text-green text-right">R$150,00</p>
                            </div>
                            <div className="clientes_content-card">
                                <p className="text-right">26/06/2000</p>
                                <p><b>Usuário:</b>Roberto</p>
                                <p><b>Empresa:</b>ViaCloud</p>
                                <p><b>Serviço:</b>Lambda</p>
                                <p className="text-green text-right">R$150,00</p>
                            </div>
                        </div>
                    </section>
                    <aside className="clientes__filtro">
                        <div className="filter-box">
                            <h5>Filtrar</h5>
                            <div className="input-search">
                                <input type="text" placeholder="Pesquisar..." />
                                <i className="fas fa-search"></i>
                            </div>
                            <div class="metade">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div class="metade">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                    </aside>
                </div>
            </header>
        );
    }
}
