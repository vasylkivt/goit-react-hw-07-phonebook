import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;

  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;

  transition: background 250ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
