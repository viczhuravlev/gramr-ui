import { styled } from 'linaria/react';

export const H2 = styled.h2`
  margin-top: 16px;
`;

export const H3 = styled.h3`
  margin-top: 32px;
`;

export const H4 = styled.h3`
  margin-top: 16px;
`;

export const Paragraph = styled.p`
  margin: 16px 0;
`;

export const Hr = styled.hr`
  margin: 32px 0;
`;

export const Info = styled.p`
  padding: 16px 0 16px 16px;
  margin: 16px 0;

  border-left: 3px solid var(--gramr-ui-prominent-color);

  & > span {
    display: block;

    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Pre = styled.pre`
  padding: 16px;
  margin: 24px 0;

  color: var(--gramr-ui-primary-color);

  border: 1px solid var(--gramr-ui-primary-color);
  border-radius: 8px;
`;
