export enum RoutesEnum {
  HOME = '/',
  PROFILE = '/profile',
  LOGIN = '/login',
  REPOS = '/repos',
  REPO_DETAIL = '/:user/:repoId',
}

export type RoutesEnumType = keyof typeof RoutesEnum;
