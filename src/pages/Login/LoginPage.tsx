import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { RoutesEnum } from '@/types/enums/routes';

import { LoginForm } from './components/LoginForm';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(RoutesEnum.HOME);
    }
  }, [isAuthenticated, navigate]);

  return <LoginForm onLogin={loginWithRedirect} />;
};
