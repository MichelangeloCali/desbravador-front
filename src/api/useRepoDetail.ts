import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { PathsEnum } from '@/types/enums/paths';
import { QueryKeys } from '@/types/enums/query-keys';
import { Repo } from '@/types/models/Repos';

import { api } from './api';

type GetRepoDetailParams = {
  fullName: string;
};

const getRepoDetail = async ({ fullName }: GetRepoDetailParams): Promise<Repo> => {
  const response = await api.get(`${PathsEnum.REPOS}/${fullName}`);
  return response.data;
};

export const useRepoDetail = (fullName: string, options?: UseQueryOptions<Repo>) => {
  return useQuery({
    queryKey: [QueryKeys.REPO_DETAIL, fullName],
    queryFn: () => getRepoDetail({ fullName }),
    enabled: false,
    ...options,
  });
};
