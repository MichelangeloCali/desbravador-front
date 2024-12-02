import { useRepoDetail } from '@/api/useRepoDetail';
import { Loader } from '@/components';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const RepoDetailPage = () => {
  const { user, repoId } = useParams<{ user: string; repoId: string }>();
  const fullName = `${user}/${repoId}`;

  if (!fullName) return null;

  const { data: repo, isLoading, isError } = useRepoDetail(fullName);

  if (isLoading) return <Loader />;

  if (isError || !repo) {
    return <Typography>Repositório não encontrado.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" color="primary">
        {repo.name}
      </Typography>
      <Typography variant="body1" color="primary">
        {repo.description || 'Sem descrição disponível'}
      </Typography>
      <Typography variant="body2" color="primary">
        Stars: {repo.stargazers_count}
      </Typography>
      <Typography variant="body2" color="primary">
        Forks: {repo.forks_count}
      </Typography>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Visitar Repositório
      </a>
    </div>
  );
};
