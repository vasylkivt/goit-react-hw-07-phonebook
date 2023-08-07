import styled from 'styled-components';

export const Notification = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 20px;

  text-align: ${({ $textAlign }) => (!$textAlign ? 'center' : $textAlign)};
  margin: ${({ $margin }) => (!$margin ? 'auto' : $margin)};
`;
