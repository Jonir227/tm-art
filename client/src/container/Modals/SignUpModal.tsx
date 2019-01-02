import { debounce } from 'lodash-es';
import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { checkPassword } from '../../../../shared/util/auth';
import { getCheckUser } from '../../api/Auth';
import { withModal } from '../../component/Shared';
import {
  BottomWrapper,
  InputWrapper,
  Label,
  ModalHeader,
  RegisterField,
  SubmitButton,
  Wrapper,
} from './Styles';

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
    console.log(attrKey);
    switch (attrKey) {
      case 'username': {
        const { validName } = await getCheckUser(value);
        valid = validName && value.length > 0;
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
        <ModalHeader>Sign In</ModalHeader>
        <InputWrapper>
          <Label>E-mail</Label>
          <RegisterField
            id="username"
            type="email"
            onChange={this.onChangeInput}
            placeholder="email을 입력해주세요"
            value={username}
            required
          />
          {username.length > 0 &&
            (isUsernameValid ? (
              <div>이름이 돼요~</div>
            ) : (
              <div>이름이 안돼요~</div>
            ))}
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
        <InputWrapper>
          <Label>NickName</Label>
          <RegisterField
            id="nickName"
            type="input"
            onChange={this.onChangeInput}
            placeholder="닉네임을 입력해 주세요"
            value={nickName}
            required
          />
        </InputWrapper>
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
