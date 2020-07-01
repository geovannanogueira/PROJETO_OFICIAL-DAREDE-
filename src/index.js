import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Servicos from './pagina_servicos/App';
import Login from './pagina_login/App';
import LogAuditoria from './pagina_auditoria/App';
import CadastroUsuario from './pagina_cadastro/App';
import Nav from './components/Nav/nav';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

  const routing =(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/servicos' component={Servicos}/>
          <Route exact path='/logAuditoria' component={LogAuditoria}/>
          <Route exact path='/cadastroUsuario' component={CadastroUsuario}/>
        </Switch>
      </div>
    </Router>
  );

  ReactDOM.render(routing, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
