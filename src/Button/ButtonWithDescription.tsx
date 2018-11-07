import React, { StatelessComponent } from 'react';

interface IButtonWithDescription {
  text: string;
  description: string;
}

const ButtonWithDescription: StatelessComponent<IButtonWithDescription> = ({
  text,
  description
}) => (
  <button>
    {text}
    <br />
    <span style={{ color: 'gray' }}>{description}</span>
  </button>
);

export default ButtonWithDescription;
