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
        <h2>Conheça o Fantasy!</h2>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
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
