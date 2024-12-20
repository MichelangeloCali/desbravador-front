import { Navigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { Loader } from '@/components';

type PrivateRouteProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
