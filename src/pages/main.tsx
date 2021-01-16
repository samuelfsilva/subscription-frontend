import React from 'react';

import '../styles/global.css';
import '../styles/pages/main.css';

import logoImg from './images/logo.svg';

import Input from '../components/Input';
import Button from '../components/Button';

function Main() {
  return (
    <div id="page-landing">
      <img src={logoImg} alt="Fantasy"/>
      <h1>Fantasy</h1>
    </div>
  );
}

export default Main;
