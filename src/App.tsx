import './App.css';

import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './routes/AuthProvider';

export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
