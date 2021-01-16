import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import './styles.css';

interface Props extends InputProps {
    name: string;
}

//type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputMask: React.FC<Props> = ({ name, ...rest }) => {
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  const inputRef = useRef(null);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: 'value',
          setValue(ref: any, value: string) {
            ref.setInputValue(value);
          },
          clearValue(ref: any) {
            ref.setInputValue('');
          },
        })
      }, [fieldName, registerField]);

    return (
        <div className="input-block">
            <ReactInputMask 
                id={name}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest} />
            { error && <span>{error}</span> }
        </div>
    );
}

export default InputMask;
