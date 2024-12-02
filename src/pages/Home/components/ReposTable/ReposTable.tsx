import { Link } from 'react-router-dom';

import {
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { Calendar, ChevronDown, GitFork, Star } from 'lucide-react';

import { useRepoSorting } from '@/hooks/useReposSorting';
import { RoutesEnum } from '@/types/enums/routes';
import { Repo } from '@/types/models/Repos';

type RepoTableProps = {
  repos: Repo[] | null;
};

export const ReposTable = ({ repos }: RepoTableProps) => {
  const { sortedRepos, handleMenuItemClick, handleClick, handleClose, anchorEl, open } =
    useRepoSorting(repos);

  if (!repos) {
    return <Typography>Sem repositórios disponíveis.</Typography>;
  }

  return (
    <div className="flex flex-col h-[600px] overflow-auto scrollbar-hide pr-3 w-[400px] sm:w-[580px] md:w-[780px] lg:w-full overflow-x-auto">
      <div className="flex self-end">
        <IconButton onClick={handleClick} color="primary">
          <Typography color="primary">Filtros</Typography>
          <ChevronDown />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          <MenuItem
            onClick={() => handleMenuItemClick('stars')}
            className="text-silver-900 gap-2"
          >
            <Star size={16} /> Estrelas
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick('date')}
            className="text-silver-900 gap-2"
          >
            <Calendar size={16} /> Data
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick('forks')}
            className="text-silver-900 gap-2"
          >
            <GitFork size={16} /> Forks
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick('name')}
            className="text-silver-900 gap-2"
          >
            <span style={{ fontSize: 16 }}>A-Z</span> Nome
          </MenuItem>
        </Menu>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="w-1/4 lg:w-1/5">
                <Typography color="secondary" variant="subtitle2">
                  Nome
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary" variant="subtitle2">
                  Descrição
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary" variant="subtitle2">
                  Star Count
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary" variant="subtitle2">
                  Forks
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary" variant="subtitle2">
                  Link
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRepos?.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {repo.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {repo.description || 'Sem descrição'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {repo.stargazers_count}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {repo.forks_count}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    <Link
                      to={`${RoutesEnum.REPOS}/${repo.full_name}`}
                      className="text-info hover:underline flex items-center"
                    >
                      Acessar
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
