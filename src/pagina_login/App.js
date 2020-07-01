import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import './App.css';

import logo from '../imagens/logoOficial.png';

export default class Login extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         email: "",
    //         senha: "",
    //         segundoFatorAutenticacao: ""
    //     }
    // }

    // loginEmail = (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // loginSenha = (event) => {
    //     this.setState({ senha: event.target.value })
    // }

    // segundoFatorAutenticacao = (event) => {
    //     this.setState({ segundoFatorAutenticacao: event.target.value })
    // }

    // efetuarLogin = (event) => {
    //     event.preventDefault();

    //     Axios.post("", {
    //         email: this.state.email,
    //         senha: this.state.senha,
    //     })
    //         .then(data => {
    //             if (data.status === 200) {
    //                 localStorage.setItem("usuario-darede", data.data.token);
    //                 this.props.history.push('/');
    //             } else {
    //                 console.log("Erro!")
    //             }
    //         })
    //         .catch(erro => {
    //             this.setState({ erro: <div className="erro">"Usuário ou senha inválido"</div> });
    //             console.log(erro);
    //         })
    // }

    render() {
        return (
            // <div className="tela_login">
            //     <header className="container2">
            //         <img src={logo} className="logo" />
            //     </header>
            //     <section className="corpo">
            //         <form>
            //             <div className="item">
            //                 <input className="input_email" placeholder="  Email" type="email" name="username" />
            //             </div>
            //             <div className="item1">
            //                 <input className="input_senha" placeholder="  Senha" type="password" name="password" />
            //             </div>
            //             <div className="item3">
            //                 <input className="input_fator" placeholder="  Segundo fator de autenticação" type="password" name="password" />
            //             </div>

            //             <div className="item2">
            //                 <button className="btn_login">
            //                     <Link className="EMILIA" to='/home'>LOGIN</Link>
            //                 </button>
            //             </div>
            //             <h1 className="pergunta">Ainda não possui conta?</h1>
            //             <strong><Link className="Link" to='/cadastroUsuario'>Cadastre-se</Link></strong>
            //         </form>
            //     </section>
            // </div>

                <section className="login">
                    <div className="login__logo">
                        <img src={logo} alt="Logo Darede a nuvem" className="login__logo-img"/>
                    </div>
                    <div className="login__content">
                        <div className="wrapper">
                            <div className="login__content-inner">
                                <h2>Login</h2>
                                <form action="" className="login__content-form">
                                    <input type="email" className="form__campo" placeholder="E-mail"/>
                                    <input type="password" className="form__campo" placeholder="Senha"/>
                                    <input type="password" className="form__campo" placeholder="Segundo fator de autenticação"/>
                                    <div className="lembre-se">

                                    </div>
                                    <button className="btn btn-submit">Login</button>
                                    <p>Ainda não possui conta?<a className="link-cadastre" href="/cadastroUsuario">&nbsp;Cadastre-se</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        );

    }
}

