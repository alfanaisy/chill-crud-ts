import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../stores/auth.store';

const AuthRoute = ({ children }: PropsWithChildren) => {
  const session = useAuthStore((state) => state.session);

  if (session) return <Navigate to={'/'} />;

  return children;
};

export default AuthRoute;
