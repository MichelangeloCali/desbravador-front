import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components';
import { RoutesEnum } from '@/enums/routes';
import { HomePage, LoginPage, ProfilePage } from '@/pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.LOGIN} element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route
            path={RoutesEnum.HOME}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path={RoutesEnum.PROFILE}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
