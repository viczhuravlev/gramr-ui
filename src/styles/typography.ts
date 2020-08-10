import { css } from 'linaria';

export const stylesTextSize = css`
  &[data-size],
  &[data-size='m'] {
    font-size: var(--gramr-ui-font-size-m);
    line-height: var(--gramr-ui-font-line-height-m);
  }

  &[data-size='xs'] {
    font-size: var(--gramr-ui-font-size-xs);
    line-height: var(--gramr-ui-font-line-height-xs);
  }

  &[data-size='s'] {
    font-size: var(--gramr-ui-font-size-s);
    line-height: var(--gramr-ui-font-line-height-s);
  }

  &[data-size='l'] {
    font-size: var(--gramr-ui-font-size-l);
    line-height: var(--gramr-ui-font-line-height-l);
  }

  &[data-size='xl'] {
    font-size: var(--gramr-ui-font-size-xl);
    line-height: var(--gramr-ui-font-line-height-xl);
  }
`;
