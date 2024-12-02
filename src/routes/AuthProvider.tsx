import { ReactElement } from 'react';

import { Auth0Provider } from '@auth0/auth0-react';

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@/config/environments';

type AuthProviderProps = {
  children: ReactElement;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
