import React from 'react';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';
import withModal from '../Shared/Modal';
import TextInput from '../Shared/TextInput';

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.h3`
  color: ${GreenColor.dark};
  font-family: 'Indie Flower';
  font-size: 35px;
  font-weight: 400;
  text-align: center;
`;

const InputWrapper = styled.div`
  height: 100px;
  margin: 12px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${GreenColor.dark};
  font-family: 'Indie Flower';
  font-size: 20px;
  margin-bottom: 8px;
`;

const RegisterField = styled(TextInput)`
  width: 90%;
`;

const LoginModal = () => {
  return (
    <Wrapper>
      <ModalHeader>Sign In</ModalHeader>
      <InputWrapper>
        <Label>E-mail</Label>
        <RegisterField placeholder="email을 입력해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Label>Password</Label>
        <RegisterField placeholder="id" />
      </InputWrapper>
      <InputWrapper>
        <Label>NickName</Label>
        <RegisterField placeholder="id" />
      </InputWrapper>
    </Wrapper>
  );
};

export default withModal(LoginModal);
