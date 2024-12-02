import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';

import { RoutesEnum } from '@/types/enums/routes';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(RoutesEnum.HOME);
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={6} className="p-14 max-w-[350px] rounded-lg">
        <Typography variant="h4" align="center" gutterBottom>
          Bem-vindo de Volta!
        </Typography>

        <Typography variant="body1" align="center">
          Faça login para continuar
        </Typography>

        <Typography variant="body2" align="center">
          Ao fazer login, você poderá acessar todos os recursos da sua conta.
        </Typography>

        <Divider sx={{ marginY: 3 }} />

        <Button
          variant="outlined"
          color="info"
          size="large"
          fullWidth
          onClick={() => loginWithRedirect()}
        >
          LOGIN
        </Button>
      </Paper>
    </Box>
  );
};
