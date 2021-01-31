import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { parse, isDate } from "date-fns";

import api from '../services/api';

import '../styles/global.css';
import '../styles/pages/subscription.css';

import logoImg from '../images/logo.svg';
import formConfirma from '../images/form-confirma.svg';

import Input from '../components/Input';
import InputMask from '../components/InputMask';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  nascimento?: Date;
}

type errorType = {
  [key: string] : string
}

function Subscription(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const exibeMensagemSucesso = () => {
    const incluiMensagem = document.querySelector("div.form-message");
    const removeMensagem = document.getElementById("mensagem");

    incluiMensagem?.classList.add('inscricao-enviada');

    removeMensagem?.addEventListener("animationend", event => {
      if (event.animationName === "fade") {
        removeMensagem?.classList.remove('inscricao-enviada');
      }
    });
  }

  const transformData = (value: any, originalValue: any) => {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd/MM/yyyy", new Date());
    
    return parsedDate;
  }

  const testData = (nascimento?:Date) => {
    const cutoff = new Date();
    let data = new Date();
    
    cutoff.setFullYear(cutoff.getFullYear() - 18);
    
    if (nascimento)
    data = nascimento;
    
    return data <= cutoff;
  }

  var errorMessages: errorType = {};

  const preencheListaErro = (err: Yup.ValidationError, errorMessages: errorType) => {
    if (err.path) {
      if (err.path === "nascimento") {
        if (err.type === "typeError") {
          errorMessages[err.path] = "Informe uma data válida"
          return;
        }
      }

      errorMessages[err.path] = err.message;
    }
  }

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .strict(true)
          .trim('O nome não pode começar ou acabar com espaço')
          .required('O nome é obrigatório'),
        email: Yup.string()
          .email('Informe um e-mail válido')
          .required('O e-mail é obrigatório'),
        nascimento: Yup
          .date()
          .transform(transformData)
          .test("nascimento", "Você deve ser maior de 18 anos", testData)
          .required('Informe a sua data de nascimento'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      
      await api.post('subscribe', data);

      /* Dados gravados com sucesso */

      exibeMensagemSucesso();

      /* Limpa formulário e críticas */

      if (formRef.current) {
        formRef.current.setErrors({});
        formRef.current.reset();
      }
    } catch (error) {
      /* Erro na validação de campos do formulário */

      if (error instanceof Yup.ValidationError) {
        errorMessages = {};
        
        error.inner.forEach(err => {preencheListaErro(err, errorMessages)});

        formRef.current?.setErrors(errorMessages);
      }
    }
  }

  return (
    <div id="page-subscription">
      <Link to="/">
        <img className="logo" src={logoImg} alt="Fantasy"/>
      </Link>
      <h1>YouFantasy</h1>
      <Form id="subscription-form" ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu primeiro nome*" />
        <Input name="email" placeholder="Seu melhor e-mail*" />
        <InputMask 
          name="nascimento" 
          mask="99/99/9999"
          placeholder="Sua data de nascimento*" />
        <Button name="enviar" label="Inscreva-se" type="submit" />
      </Form>
      <div id="mensagem" className="form-message">
        <img src={formConfirma} alt="Confirmado" />
        <span>Inscrição realizada com sucesso.</span>
      </div>
    </div>
  );
}

export default Subscription;
