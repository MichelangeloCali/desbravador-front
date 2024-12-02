import { User } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';

type InfoProfileProps = {
  user?: User;
  onLogout: () => void;
};

export const InfoProfile = ({ user, onLogout }: InfoProfileProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={10} maxWidth="1280px" width="100%">
      <Box width="100%" display="flex" justifyContent="flex-start">
        <Typography variant="h3" alignSelf="flex-start">
          Perfil
        </Typography>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <img
          src={user?.picture || '/social.svg'}
          alt="Logo"
          className="sm:h-40 sm:w-40 h-20 w-20 rounded-full"
        />

        <Typography variant="h5">
          <span className="text-silver-500">Nome: </span>
          {user?.name}
        </Typography>

        <Typography variant="h5">
          <span className="text-silver-500">Email: </span>
          {user?.email}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        color="error"
        size="large"
        onClick={onLogout}
        className="max-w-80 w-full self-center"
      >
        Logout
      </Button>
    </Box>
  );
};
