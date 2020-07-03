import { Fragment } from 'react';
import { styled } from 'linaria/react';

export const GlobalStyles = styled(Fragment)`
  /* stylelint-disable */
  :global() {
    /* stylelint-enable */
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    *,
    *:before,
    *:after {
      box-sizing: inherit;

      padding: 0;
      margin: 0;

      user-select: none;

      outline: none;
      -webkit-overflow-scrolling: touch;
    }

    html,
    body {
      box-sizing: border-box;

      width: 100%;
      height: 100%;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1;

      background-color: #fff;

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
  }
`;
