import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { DebounceInput } from 'react-debounce-input';

export const InputWrap = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 30px;
  margin-top: 60px;
  width: 310px;
  border-bottom: 2px solid #fff;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;

export const Input = styled(DebounceInput)`
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: #fff;

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchIcon = styled(BsSearch)`
  fill: ${({ theme }) => theme.colors.accent};

  position: absolute;
  right: 8px;

  font-size: 1.2em;
  top: 20px;
`;
