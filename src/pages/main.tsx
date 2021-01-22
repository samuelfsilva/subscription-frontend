import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

import '../styles/global.css';
import '../styles/pages/main.css';

import logoImg from '../images/logo.svg';
import instagram from '../images/instagram.svg';

function Main() {
  const history = useHistory();

  return (
    <div className="page-main">
      <div className="main">
        <img className="logo" src={logoImg} alt="YouFantasy"/>
        <h1>YouFantasy</h1>
        <main>
          <h2>Conheça o YouFantasy!</h2>
          <section>
            YouFantasy é lugar ideal para o público adulto. Se você é solteiro, solteira ou casal, 
            precisa conhecer o YouFantasy. Aqui você conhecerá tudo que existe de mais excitante 
            no mundo erótico. Conheça de tudo, eventos, festas e produtos do tema adulto e sinta-se à 
            vontade para explorar seus mais profundos desejos.
          </section>
        </main>
        <Button 
          name="enviar" 
          label="Inscreva-se" 
          type="button" 
          onClick={() => history.push('subscription')} />
      </div>
      <div className="social-media">
        <a href="http://instagram.com/youfantasy_site" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram"/>
        </a>
      </div>
    </div>
  );
}

export default Main;
