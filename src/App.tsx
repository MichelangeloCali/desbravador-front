import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './routes/AuthProvider';
import { ThemeProvider } from './theme/Theme';

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};
