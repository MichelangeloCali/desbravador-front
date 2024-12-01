import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (provider: string) => {
    loginWithRedirect({
      authorizationParams: {
        connection: provider,
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => loginWithRedirect()}>LOGIN</Button>
    </div>
  );
};
