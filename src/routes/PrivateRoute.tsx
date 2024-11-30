import { Navigate } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

type PrivateRouteProps = {
  children: React.ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return isAuthenticated ? children : <Navigate to="/login" />
}
