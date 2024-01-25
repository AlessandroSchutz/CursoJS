import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
    background: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: ${colors.primaryDarkColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: ${colors.primaryDarkColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background: ${colors.warningColor};
    color: ${colors.primaryDarkColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background: ${colors.infoColor};
    color: ${colors.primaryDarkColor};

  }

`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .styleButtonDel {
    background-color: transparent; /* Define a cor de fundo */
    color: ${colors.errorColor};

    &:hover {
      color: #e52107c8;
      cursor: pointer;
    }
  }
`;
