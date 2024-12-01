export enum RoutesEnum {
  HOME = '/',
  PROFILE = '/profile',
  LOGIN = '/login',
}

export type RoutesEnumType = keyof typeof RoutesEnum;
