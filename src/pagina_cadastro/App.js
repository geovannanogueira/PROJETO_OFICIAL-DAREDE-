import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import logo from '../imagens/logoOficial.png';

export default class Cadastrar extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         nome: "",
    //         nomeEmpresa: "",
    //         email: "",
    //         senha: ""
    //     }
    // }

    // cadastroNome = (event) => {
    //     this.setState({ nome: event.target.value })
    // }

    // cadastroNomeEmpresa = (event) => {
    //     this.setState({ nomeEmpresa: event.target.value })
    // }

    // cadastroEmail = (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // cadastroSenha = (event) => {
    //     this.setState({ senha: event.target.value })
    // }

    render() {

        return (
            // <div className="Cadastro">
            //     <header className="container">
            //         <img src={logo} className="logo" />
            //     </header>
            //     < form
            //     // method="POST" onSubmit={this.cadastrar}
            //     >
            //         <h1>CADASTRO</h1>
            //         <br></br>
            //         <div className="item">
            //             <input
            //                 className="input__login"
            //                 placeholder="Nome"
            //                 type="text"
            //                 name="username"
            //                 id="login__email"
            //             // onChange={this.cadastroNome}
            //             // value={this.state.nome}
            //             />
            //         </div>
            //         <div className="item">
            //             <input
            //                 className="input__login"
            //                 placeholder="Nome da Empresa"
            //                 type="text"
            //                 name="username"
            //                 id="login__email"
            //             // onChange={this.cadastroNome}
            //             // value={this.state.nomeEmpresa}
            //             />
            //         </div>
            //         <div className="item">
            //             <input
            //                 className="input__login"
            //                 placeholder=" Email"
            //                 type="text"
            //                 name="username"
            //                 id="login__email"
            //             //     onChange={this.cadastroEmail}
            //             //     value={this.state.email}
            //             />
            //         </div>
            //         <div className="item">
            //             <input
            //                 className="input__login"
            //                 placeholder=" Senha"
            //                 type="password"
            //                 name="password"
            //                 id="login__password"
            //                 minLength="8"
            //             // onChange={this.cadastroSenha}
            //             // value={this.state.senha}
            //             />
            //         </div>
            //         <div className="click">
            //             <button className="botao" id="btn_login">
            //                 Cadastrar
            //             </button>
            //             <h1 className="pergunta">Já possui conta?</h1>
            //             <strong><Link className="Link" to='/cadastroUsuario'>Login</Link></strong>
            //         </div>
            //     </form>
            // </div >

            <section className="cadastro">
                    <div className="cadastro__logo">
                        <img src={logo} alt="Logo Darede a nuvem" className="cadastro__logo-img"/>
                    </div>
                    <div className="cadastro__content">
                        <div className="wrapper">
                            <div className="cadastro__content-inner">
                                <h2>Cadastro</h2>
                                <form action="" className="cadastro__content-form">
                                    <input type="text" className="form__campo" placeholder="Nome"/>
                                    <input type="text" className="form__campo" placeholder="Nome da empresa"/>
                                    <input type="email" className="form__campo" placeholder="E-mail"/>
                                    <input type="password" className="form__campo" placeholder="Senha"/>
                                    <div className="robo">

                                    </div>
                                    <button className="btn btn-submit">Cadastrar</button>
                                    <p>Já possui conta?<a className="link-login" href="/">&nbsp;Login</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}
