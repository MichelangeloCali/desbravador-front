import { RoutesEnum } from '@/enums/routes';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = (provider: string) => {
    loginWithRedirect({
      authorizationParams: {
        connection: provider,
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(RoutesEnum.HOME);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => loginWithRedirect()}>LOGIN</Button>
    </div>
  );
};
