import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

import '../styles/global.css';
import '../styles/pages/main.css';

import logoImg from '../images/logo.svg';

function Main() {
  const history = useHistory();

  return (
    <div id="page-main">
      <img src={logoImg} alt="Fantasy"/>
      <h1>Fantasy</h1>
      <main>
        Conheça o Fantasy!
      </main>
      <Button 
        name="enviar" 
        label="Inscreva-se" 
        type="button" 
        onClick={() => history.push('subscription')} />
    </div>
  );
}

export default Main;
