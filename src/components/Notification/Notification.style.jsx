import styled from 'styled-components';

export const Notification = styled.p`
  position: ${({ $position }) => (!$position ? 'relative' : $position)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 20px;

  text-align: ${({ $textAlign }) => (!$textAlign ? 'center' : $textAlign)};
  margin: ${({ $margin }) => (!$margin ? 'auto' : $margin)};
`;
