import styled from 'styled-components';
// import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const UsuarioContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
  }

  div + div {
    border-top: 1px solid #ddd;
  }

  span {
    padding: 0 10px;
  }

  .header {
    padding: 0 15px;
    font-size: 18px;
    font-weight: bold;
  }
`;
