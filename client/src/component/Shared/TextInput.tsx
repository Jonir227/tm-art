import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';

const TextInput = styled.input`
  font-size: 16px;
  border: none;
  border-bottom: solid 1px #ccc;
  padding: 8px;
  &:focus {
    border-bottom: solid 2px ${GreenColor.prime};
  }
  &::placeholder {
    color: ${GreenColor.light};
  }
`;

export default TextInput;
