import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components';
import { HomePage, LoginPage, ProfilePage, RepoDetailPage } from '@/pages';
import { RoutesEnum } from '@/types/enums/routes';

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

          <Route
            path={`${RoutesEnum.REPOS}${RoutesEnum.REPO_DETAIL}`}
            element={
              <PrivateRoute>
                <RepoDetailPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
