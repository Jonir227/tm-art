import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { SignUpModal } from '.';
import { UserEntity } from '../../component/Modal';
import { withModal } from '../../component/Shared';
import {
  BottomWrapper,
  ModalHeader,
  SignUpButton,
  SubmitButton,
  Wrapper,
} from './Styles';

interface ILoginModalProps {
  handleLogin: (username: string, password: string) => void;
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
    this.props.handleLogin(username, password);
  };

  public render() {
    const { username, password } = this.state;
    return (
      <Wrapper>
        <ModalHeader>Sign In</ModalHeader>
        <UserEntity
          id="username"
          labelName="E-mail"
          type="email"
          onChangeInput={this.onChangeInput}
          placeholder="eamil을 입력해주세요"
          value={username}
          required
        />
        <UserEntity
          id="password"
          labelName="Password"
          type="password"
          onChangeInput={this.onChangeInput}
          placeholder="password를 입력해주세요"
          value={password}
          required
        />
        <BottomWrapper>
          <SignUpModal>
            <SignUpButton type="button">Sign Up</SignUpButton>
          </SignUpModal>
          <SubmitButton type="submit" onClick={this.handleSubmit}>
            Submit
          </SubmitButton>
        </BottomWrapper>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  {
    handleLogin: (username: string, password: string) => {
      console.log('hi ');
    },
  },
)(withModal(LoginModal));
