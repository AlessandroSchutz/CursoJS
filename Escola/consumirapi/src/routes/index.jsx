import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} />
      <MyRoute exact path="/register/" component={Register} />
      <MyRoute exact path="/users/" component={Users} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
