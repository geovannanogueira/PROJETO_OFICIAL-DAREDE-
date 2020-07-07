import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../imagens/daredePNG.png';
import lambda from '../imagens/lambda.png';
import ec2 from '../imagens/monitoramento-cinza.png';

export default class App extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     lista: []
  //   }
  // }

  render() {
    return (
      // <div className="tela_home">
      //   <header className="container">
      //     <img src={logo2} className="logo" />
      //     <div>
      //       <h1>WELCOME TO OUR WEBSITE</h1>
      //     </div>

      //     {/* <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}
      //     <div>
      //       <p>A Darede é uma empresa de consultoria especialista em serviço de TI.</p>
      //     </div>
      //     <div id="botoes">
      //       <div className="botao1">
      //         <button className="btn_ec2">
      //           <strong>
      //             <Link className="EMILIA" to='/servicos'>CRIAR</Link>
      //       {/* <br />
      //           EC2 */}
      //           </strong>
      //         </button>
      //         <p className="nome"><strong>EC2</strong></p>
      //       </div>
      //       <div className="botao2">
      //         <button className="btn_lambda">
      //           <strong>
      //             <Link className="EMILIA" to='/servicos'>CRIAR</Link>
      //       {/* <br />
      //         LAMBDA */}
      //           </strong>
      //         </button>
      //         <p className="nome"><strong>LAMBDA</strong></p>
      //       </div>
      //     </div>
      //   </header>
      // </div>
      <header className="">
      
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="" className="header__logo-img" />
        </div>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">Serviços</a>
          <a href="#" className="header__nav-link">Clientes</a>
        </nav>
        
        </div>
        <div className="servicos">
          <section className="servicos__content">
            <h3 className="servicos__content-title">
              Nossos serviços
            </h3>
            <div className="servicos__content-items">
              <div className="servicos_content-card">
                <div className="card-front">
                  <img src="https://i.pinimg.com/originals/ee/bf/a4/eebfa4c693239be5b510fcc59136f608.jpg" alt="" class="card-img" />
                  <div className="card__content">
                    <p>Integração de On-promise para cloud</p>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Integração de On-promise para cloud</h3>
                  <br/>
                  <p>Realize a conexão de sua infraestrutura local com seus serviços ativos na nuvem.</p>
                </div>
              </div>
              <div className="servicos_content-card">
                <div className="card-front">
                  <img src={ec2} />
                  <div className="card__content">
                    <p>EC2</p>
                  </div>
                </div>
                <div className="card-back">
                  <h3>EC2</h3>
                  <br/>
                  <p>Alugue uma instância para criar ambientes inteiros na nuvem e configura-los com o mínimo de esforço.</p>
                </div>
              </div>
              <div className="servicos_content-card">
                <div className="card-front">
                  <img src={lambda}/>
                  <div className="card__content">
                    <p>Lambda</p>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Lambda</h3>
                  <br/>
                  <p>Este serviço fornece a criação de uma instância serveless auto gerenciável para inserir suas aplicações.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
      </header>
    );
  }
}
