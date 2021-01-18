import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { parse, isDate } from "date-fns";

import api from '../services/api';

import '../styles/global.css';
import '../styles/pages/subscription.css';

import logoImg from '../images/logo.svg';

import Input from '../components/Input';
import InputMask from '../components/InputMask';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  nascimento?: Date;
}

// const initialData = {
//   nascimento: (new Date().getDay().toString().padStart(2, '0') + '/' + 
//     (new Date().getMonth() + 1).toString().padStart(2, '0') + '/' + 
//     new Date().getFullYear())
// }

function Subscription() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Informe um e-mail válido')
          .required('O e-mail é obrigatório'),
        nascimento: Yup
          .date()
          .transform((value, originalValue) => {
            const parsedDate = isDate(originalValue)
                ? originalValue
                : parse(originalValue, "dd/MM/yyyy", new Date());
            
            return parsedDate;
        })
          .test("nascimento", "Você deve ser maior de 18 anos", function(nascimento) {
            const cutoff = new Date();
            let data = new Date();
            
            cutoff.setFullYear(cutoff.getFullYear() - 18);
            
            if (nascimento)
            data = nascimento;
            
            return data <= cutoff;
          })
          .required('Informe a sua data de nascimento'),
      });

      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('subscribe', data);

      alert('Inscrição realizada com sucesso!');

      if (formRef.current) {
        formRef.current.setErrors({});
        formRef.current.reset();
      }
    } catch (error) {
      console.log({error});
      if (error instanceof Yup.ValidationError) {
        type errorType = {
          [key: string] : string
        }

        const errorMessages: errorType = {};

        error.inner.forEach(err => {
          if (err.path) {
            if (err.path === "nascimento") {
              if (err.type === "typeError") {
                errorMessages[err.path] = "Informe uma data válida"
                return;
              }
            }

            errorMessages[err.path] = err.message;
          }
        });

        if (formRef.current)
          formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <div id="page-subscription">
      <img src={logoImg} alt="Fantasy"/>
      <h1>Fantasy</h1>
      <Form id="subscription-form" ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu primeiro nome*" />
        <Input name="email" placeholder="Seu melhor e-mail*" />
        <InputMask 
          name="nascimento" 
          mask="99/99/9999"
          placeholder="Sua data de nascimento*" />
        <Button name="enviar" label="Inscreva-se" type="submit" />
      </Form>
    </div>
  );
}

export default Subscription;
