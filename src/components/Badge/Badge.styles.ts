import { styled } from 'linaria/react';

import { Text } from '../Text';

export const Badge = styled(Text)`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 28px;
  height: 28px;
  padding: 0 9px;

  color: #fff;

  background-color: var(--gramr-prominent-color);
  border-radius: 14px;

  &[data-size='xs'] {
    min-width: 20px;
    height: 20px;

    padding: 0 6px;

    border-radius: 10px;
  }

  &[data-size='s'] {
    min-width: 24px;
    height: 24px;

    padding: 0 8px;

    border-radius: 12px;
  }

  &[data-size='m'] {
    min-width: 28px;
    height: 28px;

    padding: 0 9px;

    border-radius: 14px;
  }

  &[data-size='l'] {
    min-width: 32px;
    height: 32px;

    padding: 0 10px;

    border-radius: 16px;
  }

  &[data-size='xl'] {
    min-width: 36px;
    height: 36px;

    padding: 0 12px;

    border-radius: 18px;
  }
`;
