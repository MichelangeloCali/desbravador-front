import { Box, Button, Divider, Paper, Typography } from '@mui/material';

type LoginFormProps = {
  onLogin: () => void;
};

export const LoginForm = ({ onLogin }: LoginFormProps) => {
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
          onClick={() => onLogin()}
        >
          LOGIN
        </Button>
      </Paper>
    </Box>
  );
};
