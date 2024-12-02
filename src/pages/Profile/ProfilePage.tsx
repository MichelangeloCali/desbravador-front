import { useAuth0 } from '@auth0/auth0-react';

import { InfoProfile } from './components/InfoProfile';

export const ProfilePage = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    logout({ returnTo: window.location.origin });
  };

  if (isAuthenticated) {
    return <InfoProfile user={user} onLogout={handleLogout} />;
  }
};
