import { Fragment } from 'react';
import { styled } from 'linaria/react';

import { defaultLight } from '../../styles/theme';

export const GlobalStyles = styled(Fragment)`
  /* stylelint-disable */
  :global() {
    /* stylelint-enable */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

    :root {
      /** Typography */
      --gramr-ui-font-thin: 100;
      --gramr-ui-font-normal: 400;
      --gramr-ui-font-bold: 700;

      --gramr-ui-font-size-xs: 12px;
      --gramr-ui-font-line-height-xs: 14px;

      --gramr-ui-font-size-s: 14px;
      --gramr-ui-font-line-height-s: 16px;

      --gramr-ui-font-size-m: 16px;
      --gramr-ui-font-line-height-m: 18px;

      --gramr-ui-font-size-l: 18px;
      --gramr-ui-font-line-height-l: 20px;

      --gramr-ui-font-size-xl: 20px;
      --gramr-ui-font-line-height-xl: 22px;

      /** Theme */
      --gramr-ui-primary-color: ${defaultLight['--gramr-ui-primary-color']};
      --gramr-ui-secondary-color: ${defaultLight['--gramr-ui-secondary-color']};
      --gramr-ui-prominent-color: ${defaultLight['--gramr-ui-prominent-color']};

      --gramr-ui-font-color: ${defaultLight['--gramr-ui-background-color']};
      --gramr-ui-background-color: ${defaultLight[
        '--gramr-ui-background-color'
      ]};

      --gramr-ui-heading-color: #292922;

      --gramr-ui-primary-color: #302ae6;
      --gramr-ui-secondary-color: #536390;
    }

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

      color: var(--gramr-ui-font-color);

      background-color: var(--gramr-ui-background-color);

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
