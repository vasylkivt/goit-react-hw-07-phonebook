import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  width: 400px;
  height: 450px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputWrap = styled.div`
  position: relative;
  margin: 30px 0;
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

export const Input = styled(Field)`
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
  }
`;

export const PersonIcon = styled(BsPerson)`
  fill: ${({ theme }) => theme.colors.accent};

  position: absolute;
  right: 8px;

  font-size: 1.2em;
  top: 20px;
`;

export const TelephoneIcon = styled(AiOutlinePhone)`
  fill: ${({ theme }) => theme.colors.accent};

  position: absolute;
  right: 8px;

  font-size: 1.2em;
  top: 20px;
`;
