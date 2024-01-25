import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Delete = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    padding-top: 4px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 35px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    margin-top: 5px;

    &:hover {
      border: 1px solid ${colors.primaryColor};
    }
    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
