import { memo, VFC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Login } from '../pages/Login';

export const Router: VFC = memo(() => {
  const routes = useRoutes([{ path: 'login', element: <Login /> }]);
  return routes;
});
