import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { PathsEnum } from '@/types/enums/paths';
import { QueryKeys } from '@/types/enums/query-keys';

import { Repo } from '@/types/models/Repos';

import { api } from './api';

type GetReposParams = {
  user: string;
};

const getRepos = async ({ user }: GetReposParams): Promise<Repo[]> => {
  const response = await api.get(`${PathsEnum.USERS}/${user}${PathsEnum.REPOS}`);
  return response.data;
};

export const useRepos = (user: string, options?: UseQueryOptions<Repo[]>) => {
  return useQuery({
    queryKey: [QueryKeys.REPOS, user],
    queryFn: () => getRepos({ user }),
    enabled: false,
    ...options,
  });
};
