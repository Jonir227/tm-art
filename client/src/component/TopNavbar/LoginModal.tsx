import React, { ChangeEvent, Component, MouseEvent } from 'react';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';
import withModal from '../Shared/Modal';
import TextInput from '../Shared/TextInput';

const Wrapper = styled.form`
  width: 100%;
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

const SubmitButton = styled.button`
  margin-right: 10px;
  float: right;
`;

interface ILoginModalProps {
  handlaSubmit: (username: string, password: string) => void;
}

interface ILoginModalState {
  username: string;
  isValidUsername: boolean;
  password: string;
  [attrKey: string]: string | boolean;
}

class LoginModal extends Component<ILoginModalProps, ILoginModalState> {
  public state = {
    username: '',
    isValidUsername: false,
    password: '',
  };

  public onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id: attrKey, value },
    } = e;
    this.setState({ [attrKey]: value });
  };

  public handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handlaSubmit(username, password);
  };

  public render() {
    const { username, password } = this.state;
    return (
      <Wrapper>
        <ModalHeader>Sign In</ModalHeader>
        <InputWrapper>
          <Label>E-mail</Label>
          <RegisterField
            id="username"
            type="text"
            onChange={this.onChangeInput}
            placeholder="email을 입력해주세요"
            value={username}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <RegisterField
            id="password"
            type="password"
            onChange={this.onChangeInput}
            placeholder="password를 입력해주세요"
            value={password}
            required
          />
        </InputWrapper>
        <div>
          <SubmitButton type="submit" onClick={this.handleSubmit}>
            Submit
          </SubmitButton>
        </div>
      </Wrapper>
    );
  }
}

export default withModal(LoginModal);
