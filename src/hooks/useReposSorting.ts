import { Repo } from '@/types/models/Repos';
import { useState } from 'react';

type UseRepoSortingResult = {
  sortedRepos: Repo[];
  sortBy: 'stars' | 'date' | 'forks' | 'name';
  sortOrder: 'asc' | 'desc';
  handleMenuItemClick: (sortBy: 'stars' | 'date' | 'forks' | 'name') => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
};

export const useRepoSorting = (repos?: Repo[]): UseRepoSortingResult => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortBy, setSortBy] = useState<'stars' | 'date' | 'forks' | 'name'>('stars');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const open = Boolean(anchorEl);

  const sortedRepos = [...(repos || [])].sort((a, b) => {
    switch (sortBy) {
      case 'stars':
        return sortOrder === 'desc'
          ? b.stargazers_count - a.stargazers_count
          : a.stargazers_count - b.stargazers_count;
      case 'date':
        return sortOrder === 'desc'
          ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          : new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      case 'forks':
        return sortOrder === 'desc'
          ? b.forks_count - a.forks_count
          : a.forks_count - b.forks_count;
      case 'name':
        return sortOrder === 'asc'
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleMenuItemClick = (sortBy: 'stars' | 'date' | 'forks' | 'name') => {
    setSortBy(sortBy);
    setSortOrder('desc');
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    sortedRepos,
    sortBy,
    sortOrder,
    handleMenuItemClick,
    handleClick,
    handleClose,
    anchorEl,
    open,
  };
};
