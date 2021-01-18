import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, name, ...rest }) => {
    return (
        <div className="button">
            <button {...rest}>
                {label}
            </button>
        </div>
    );
}

export default Button;
