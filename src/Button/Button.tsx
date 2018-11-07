import React, { StatelessComponent } from 'react';

interface IButton {
  text: string;
}

const Button: StatelessComponent<IButton> = ({ text }) => (
  <button>{text}</button>
);

export default Button;
