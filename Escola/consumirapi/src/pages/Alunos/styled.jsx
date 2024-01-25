import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #ddd;
  }

  .styleButtonEdit {
    background-color: transparent; /* Define a cor de fundo */
    color: ${colors.infoColor};

    &:hover {
      color: #155bcbc8;
      cursor: pointer;
    }
  }
  .styleButtonDel {
    background-color: transparent; /* Define a cor de fundo */
    color: ${colors.errorColor};

    &:hover {
      color: #e52107c8;
      cursor: pointer;
    }
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  background-color: transparent;
  display: block;
  padding: 20px 0 10px 0;
  color: ${colors.primaryColor};
`;
