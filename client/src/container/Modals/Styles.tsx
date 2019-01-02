import styled from 'styled-components';
import { TextInput } from '../../component/Shared';
import { GreenColor } from '../../constants/colors';

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.h3`
  color: ${GreenColor.dark};
  font-family: 'Indie Flower';
  font-size: 35px;
  font-weight: 400;
  text-align: center;
`;

export const InputWrapper = styled.div`
  height: 100px;
  margin: 12px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${GreenColor.dark};
  font-family: 'Indie Flower';
  font-size: 20px;
  margin-bottom: 8px;
`;

export const RegisterField = styled(TextInput)`
  width: 90%;
`;

export const BottomWrapper = styled.div`
  font-family: 'Indie Flower';
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  margin: 12px;
  padding-bottom: 10px;
`;

export const SignUpButton = styled.button`
  color: ${GreenColor.prime};
  border: none;
  background-color: transparent;
`;

export const SubmitButton = styled.button`
  height: 30px;
  width: 100px;
  margin-right: 10px;
  border-radius: 2px;
  border: none;
  background-color: ${GreenColor.prime};
  color: white;
`;
