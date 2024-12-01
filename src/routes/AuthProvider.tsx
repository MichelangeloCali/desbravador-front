import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@/config/environments';
import { Auth0Provider } from '@auth0/auth0-react';
import { ReactElement } from 'react';

type AuthProviderProps = {
  children: ReactElement;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  console.log('AUTH0_DOMAIN', AUTH0_DOMAIN);
  console.log('AUTH0_CLIENT_ID', AUTH0_CLIENT_ID);
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
