import { useRepoSorting } from '@/hooks/useReposSorting';
import { Repo } from '@/types/models/Repos';
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

type RepoTableProps = {
  repos?: Repo[];
};

export const ReposTable = ({ repos }: RepoTableProps) => {
  const { sortedRepos, handleMenuItemClick, handleClick, handleClose, anchorEl, open } =
    useRepoSorting(repos);

  return (
    <div className="flex flex-col h-[600px] overflow-auto scrollbar-hide pr-3">
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
              <TableCell>
                <Typography color="secondary">Nome</Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary">Descrição</Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary">Star Count</Typography>
              </TableCell>
              <TableCell>
                <Typography color="secondary">Forks</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRepos?.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell>
                  <Typography color="primary">{repo.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary">
                    {repo.description || 'Sem descrição'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary">{repo.stargazers_count}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary">{repo.forks_count}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
