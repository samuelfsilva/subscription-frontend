import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface Props {
    name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: 'value',
        })
      }, [fieldName, registerField]);

    return (
        <div className="input-block">
            <input 
                ref={inputRef}
                type="text" 
                id={name}
                defaultValue={defaultValue}
                {...rest} />
            { error && <span>{error}</span> }
        </div>
    );
}

export default Input;
