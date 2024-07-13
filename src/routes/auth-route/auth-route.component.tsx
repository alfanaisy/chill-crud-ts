import React, { PropsWithChildren } from 'react';
import useUserStore from '../../stores/user.store';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }: PropsWithChildren) => {
  const currentUser = useUserStore((state) => state.currentUser);

  if (currentUser) return <Navigate to={'/'} />;

  return children;
};

export default AuthRoute;
