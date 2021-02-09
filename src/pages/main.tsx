import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

import '../styles/pages/main.css';

import logoImg from '../images/logo.svg';
import instagram from '../images/instagram.svg';

const data = [
  "https://img5.cfcdn.club/f0/d2/f05cd114c5745b8d12b8a03d5b1b53d2_350x350.jpg",
  "http://www.ciadesign.com.br/wp-content/uploads/2019/06/Stand-para-feiras.png",
  "https://www.clubelatino.com.br/academia-de-danca/imagens/professor-de-danca-tango.jpg"
];

function Intro() {
  const history = useHistory();

  return (
    <div className="page-intro">
      <header>
        <img className="logo" src={logoImg} alt="YouFantasy"/>
        <h1>YouFantasy</h1>
      </header>
      <section>
        <div className="principal">
          <div className="pt1">
            <h2>Conheça o YouFantasy!</h2>
            <article>
              Plataforma ideal para o público adulto.
              Conheça pessoas, grupos e eventos com a temática adulta.
            </article>
            <Button 
              name="enviar" 
              label="Inscreva-se" 
              type="button" 
              onClick={() => history.push('subscription')} />
          </div>
          <div className="pt2">
            <img className="logo" src={logoImg} alt="YouFantasy"/>
          </div>
        </div>
        <div className="topicos">
          <div className="colunas">
            <div>
              <img src={data[0]} alt=""/>
              <h3>Autoconhecimento</h3>
              <span>
                Entre em uma jornada de autodescoberta fundamental no sexo.
                Assim é possível realizar fantasias, sentir e proporcionar prazer.
              </span>
            </div>
            <div>
              <img src={data[1]} alt=""/>
              <h3>Eventos</h3>
              <span>
                Descubra eventos na sua região. Participe de palestras, feiras e festas
                para o público adulto, você vai sair inspirado.
              </span>
            </div>
            <div>
              <img src="https://www.clubelatino.com.br/academia-de-danca/imagens/professor-de-danca-tango.jpg" alt=""/>
              <h3>Amigos</h3>
              <span>
                O nosso objetivo é conectar pessoas. Interaja com quem compartilha dos 
                seus interesses. Casais, solteiros e solteiras, compartilhe fantasias e 
                desejos.
              </span>
            </div>
          </div>
          <Button 
            name="enviar" 
            label="Inscreva-se" 
            type="button" 
            onClick={() => history.push('subscription')} />
        </div>
      </section>
      <footer>
        <div className="social-media">
          <span>Redes sociais</span>
          <div className="social-icon">
            <a href="http://instagram.com/youfantasy_site" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Intro;
