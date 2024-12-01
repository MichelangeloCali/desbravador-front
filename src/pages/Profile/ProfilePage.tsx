import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const ProfilePage = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    //@ts-ignore
    logout({ returnTo: window.location.origin });
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>Perfil</h1>
        <p>Nome: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }
};
