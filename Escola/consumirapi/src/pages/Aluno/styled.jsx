import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    font-size: 18px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;

    &:hover {
      border: 1px solid ${colors.primaryColor};
    }
    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: ${colors.primaryDarkColor};
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
