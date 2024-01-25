import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { UsuarioContainer, Title } from './styled';
import axios from '../../services/axios';

export default function Users() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/users');
      setUsuarios(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title>Usuários Cadastrados</Title>

      <UsuarioContainer>
        <div>
          <span className="header">Nome</span>
          <span className="header">E-mail</span>
        </div>
        {usuarios.map((usuario) => (
          <div key={String(usuario.id)}>
            <span>{usuario.nome}</span>
            <span>{usuario.email}</span>
          </div>
        ))}
      </UsuarioContainer>
    </Container>
  );
}
