import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { FaWindowClose, FaExclamation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form, Delete } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido!');
    }
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const exclamation = e.currentTarget.nextSibling;
    toast.warning('Atenção você irá excluir este usuário!');
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Delete>
        <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

        {isLoggedIn && (
          <Link
            to="/users/delete"
            onClick={handleDeleteAsk}
            className="styleButtonDel"
          >
            <FaWindowClose size={24} />
          </Link>
        )}
        <FaExclamation
          size={25}
          display="none"
          cursor="pointer"
          onClick={(e) => {
            e.preventDefault();
            if (id) axios.delete(`/users`);
            dispatch(actions.loginFailure());
            history.push('/');
            toast.success('Usuário deletado com sucesso!');
          }}
        />
      </Delete>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu Nome"
            autoComplete="off"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu E-mail"
            autoComplete="off"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua Senha"
            autoComplete="off"
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
      </Form>
    </Container>
  );
}
