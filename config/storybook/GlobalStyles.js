import React from 'react';
import { css, Global } from '@emotion/core';

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    user-select: none;

    outline: none;
    -webkit-overflow-scrolling: touch;
  }

  html,
  body {
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    background-color: #fff;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1;

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  div {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  input,
  button {
    box-sizing: border-box;
  }

  span {
    word-wrap: break-word;
  }
`;

function GlobalStyles() {
  return <Global styles={styles} />;
}

export default GlobalStyles;
