import { Box, Typography } from '@mui/material';

import { Repo } from '@/types/models/Repos';

type RepoDetailProps = {
  repo: Repo;
};

export const RepoDetail = ({ repo }: RepoDetailProps) => {
  return (
    <Box className="flex flex-col gap-4 w-full max-w-7xl">
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
    </Box>
  );
};
