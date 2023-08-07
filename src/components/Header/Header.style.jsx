import styled from 'styled-components';
export const Header = styled.header`
  position: sticky;

  height: 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
