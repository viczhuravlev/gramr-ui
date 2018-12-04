import styled from '@emotion/styled';
import React, { StatelessComponent } from 'react';

interface IButton {
  text: string;
}

const SButton = styled.button`
  color: red;
`;

const Button: StatelessComponent<IButton> = ({ text, children }) => (
  <SButton>{text || children}</SButton>
);

export default Button;
