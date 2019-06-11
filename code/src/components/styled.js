import styled from 'styled-components';
import theme from './theme';

export const LinkButton = styled.button`
  background: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};

  font-size: 1em;
  border-radius: 3px;
`;

export const StackButton = styled.p`
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.contrastText};

  margin: 1em;
  padding: 0.5em;
  border-radius: 3px;
`;

export const CodeButton = styled.button`
  background: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};

  font-size: 1em;
  padding: 1em;
  border-radius: 3px;
`;
