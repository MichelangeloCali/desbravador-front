import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './routes/AuthProvider';
import { ThemeProvider } from './theme/ThemeProvider';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
