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
    <div className="flex flex-col gap-4">
      <Typography variant="h4" color="primary">
        {repo.name}
      </Typography>

      <Typography variant="body1" color="primary">
        <span className="text-silver-500">Descrição: </span>
        {repo.description || 'Sem descrição disponível'}
      </Typography>

      <Typography variant="body2" color="primary">
        <span className="text-silver-500">Stars: </span> {repo.stargazers_count}
      </Typography>

      <Typography variant="body2" color="primary">
        <span className="text-silver-500">Forks: </span>
        {repo.forks_count}
      </Typography>

      <Typography variant="body2" color="primary">
        <span className="text-silver-500">Linguagem: </span> {repo.language}
      </Typography>

      <Typography variant="body2" color="primary">
        <span className="text-silver-500">Visualizações: </span> {repo.watchers_count}
      </Typography>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-info hover:underline flex items-center"
      >
        Visitar Repositório
      </a>
    </div>
  );
};
