import styled from 'styled-components';

export const ListWrap = styled.div`
  width: 400px;
  height: 550px;
  padding: 20px;
  overflow: auto;

  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  gap: 10px;
  flex-direction: column;

  align-items: center;
`;
export const List = styled.ul`
  overflow: auto;
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;
