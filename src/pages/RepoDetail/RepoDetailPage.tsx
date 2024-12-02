import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { useRepoDetail } from '@/api/useRepoDetail';
import { Loader } from '@/components';

import { RepoDetail } from './components/RepoDetail';

export const RepoDetailPage = () => {
  const { user, repoId } = useParams<{ user: string; repoId: string }>();
  const fullName = `${user}/${repoId}`;

  const { data: repo, refetch, isLoading, isError } = useRepoDetail(fullName);

  useEffect(() => {
    if (fullName) {
      const fetchData = async () => {
        await refetch();
      };
      fetchData();
    }
  }, [fullName, refetch]);

  if (!fullName) return null;

  if (isLoading) return <Loader />;

  if (isError || !repo) {
    return <Typography>Repositório não encontrado.</Typography>;
  }

  return <RepoDetail repo={repo} />;
};
