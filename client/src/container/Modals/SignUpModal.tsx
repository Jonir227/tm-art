import { debounce } from 'lodash-es';
import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { checkPassword } from '../../../../shared/util/auth';
import { getCheckUser } from '../../api/Auth';
import { UserEntity } from '../../component/Modal';
import { withModal } from '../../component/Shared';
import { BottomWrapper, ModalHeader, SubmitButton, Wrapper } from './Styles';

interface ISignUpModalProps {
  handleSubmit: (username: string, password: string, nickName: string) => void;
}

interface IUserEntity {
  value: string;
  valid: boolean;
}

interface ISingUpModalState {
  userInfo: {
    username: IUserEntity;
    password: IUserEntity;
    nickName: IUserEntity;
    [attrKey: string]: IUserEntity;
  };
}

class SignUpModal extends Component<ISignUpModalProps, ISingUpModalState> {
  public state = {
    userInfo: {
      username: { value: '', valid: false },
      password: { value: '', valid: false },
      nickName: { value: '', valid: false },
    },
  };

  public checkValidation = debounce(async (attrKey: string, value: string) => {
    let valid: boolean = false;
    switch (attrKey) {
      case 'username': {
        const data = value.length > 0 && (await getCheckUser(value)).validName;
        valid = data;
        break;
      }
      case 'password': {
        valid = checkPassword(value);
        break;
      }
      case 'nickName': {
        valid = value.length > 0;
        break;
      }
      default:
        throw Error('attrKey should be valid User Entitiy');
    }
    this.setState(prevState => ({
      ...prevState,
      userInfo: {
        ...prevState.userInfo,
        [attrKey]: {
          ...prevState.userInfo[attrKey],
          valid,
        },
      },
    }));
  }, 500);

  public onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id: attrKey, value },
    } = e;

    this.setState(prevState => ({
      ...prevState,
      userInfo: {
        ...prevState.userInfo,
        [attrKey]: { ...prevState.userInfo[attrKey], value },
      },
    }));

    this.checkValidation(attrKey, value);
  };

  public handleSubmit = (e: MouseEvent) => {
    const {
      username: { value: username },
      password: { value: password },
      nickName: { value: nickName },
    } = this.state.userInfo;
    e.preventDefault();
    this.props.handleSubmit(username, password, nickName);
  };

  public render() {
    const {
      username: { value: username, valid: isUsernameValid },
      password: { value: password },
      nickName: { value: nickName },
    } = this.state.userInfo;

    return (
      <Wrapper>
        <ModalHeader>Sign Up</ModalHeader>
        <UserEntity
          id="username"
          labelName="E-mail"
          type="email"
          onChangeInput={this.onChangeInput}
          placeholder="eamil을 입력해주세요"
          value={username}
          required
          isValid={isUsernameValid}
          validText="가능~"
          inValidText="불가능~"
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
        <UserEntity
          id="nickName"
          type="input"
          labelName="NickName"
          onChangeInput={this.onChangeInput}
          placeholder="닉네임을 입력해 주세요"
          value={nickName}
          required
        />
        <BottomWrapper>
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
    handleSubmit: (username: string, password: string, nickName: string) => {
      console.log('ii');
    },
  },
)(withModal(SignUpModal));
