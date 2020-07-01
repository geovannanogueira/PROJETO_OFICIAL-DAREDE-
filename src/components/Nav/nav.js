import React from "react";
import { Link } from "react-router-dom";
import './nav.css';
import logo from '../../imagens/logoOficial.png';

export default function Nav() {
        return (
            <nav classname="cabecalho">
                <div className="logo">
                <Link id="Link1" to='/home'><img src={logo}/></Link>
                </div>
                <div className="servicos">
                    <Link id="Link2" to='/servicos'>Serviços</Link>
                </div>
                <div className="cliente">
                    <Link id="Link3" to='/logAuditoria'>Clientes</Link>
                </div>
            </nav>
        );
    }