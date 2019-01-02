import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';
import { TextInput } from '../Shared';

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

interface IUserEntityProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  type: string;
  placeholder: string;
  labelName: string;
  required?: boolean;
  isValid?: boolean;
  validText?: string;
  inValidText?: string;
}

const UserEntity = ({
  onChangeInput,
  value,
  id,
  placeholder,
  type,
  labelName,
  required = false,
  isValid = false,
  validText = '',
  inValidText = '',
}: IUserEntityProps) => {
  return (
    <InputWrapper>
      <Label>{labelName}</Label>
      <RegisterField
        id={id}
        type={type}
        onChange={onChangeInput}
        placeholder={placeholder}
        value={value}
        required={required}
      />
      {value.length > 0 &&
        (isValid ? <div>{validText}</div> : <div>{inValidText}</div>)}
    </InputWrapper>
  );
};

export default UserEntity;
