import { PathsEnum } from '@/types/enums/paths';
import { QueryKeys } from '@/types/enums/query-keys';
import { User } from '@/types/models/User';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { api } from './api';

type getUserParams = {
  user: string;
};

const getUser = async ({ user }: getUserParams): Promise<User> => {
  const response = await api.get(`${PathsEnum.USERS}/${user}`);

  return response.data;
};

export const useUser = (user: string, options?: UseQueryOptions<User>) => {
  return useQuery({
    queryKey: [QueryKeys.USER, user],
    queryFn: () => getUser({ user }),
    enabled: false,
    ...options,
  });
};
