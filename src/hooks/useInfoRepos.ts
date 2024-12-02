import { useEffect } from 'react';

import { debounce } from 'lodash';

import { useRepos } from '@/api/useRepos';
import { useUser } from '@/api/useUser';
import { useUserStore } from '@/stores/infoAndRepos';

export const useInfoRepos = (username: string, isValid: boolean) => {
  const { setUserData, setReposData, userData, reposData } = useUserStore();

  const {
    data: fetchedUserData,
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
    refetch: userRefetch,
  } = useUser(username);

  const {
    data: fetchedReposData,
    isLoading: isReposLoading,
    refetch: reposRefetch,
  } = useRepos(username);

  const isLoadingBoth = isUserLoading || isReposLoading;

  const hasUserValues = !!fetchedUserData && Object.values(fetchedUserData).length > 0;
  const hasUser = isUserSuccess && hasUserValues && !!fetchedUserData.id;

  useEffect(() => {
    if (fetchedUserData) {
      setUserData(fetchedUserData);
    }
    if (fetchedReposData) {
      setReposData(fetchedReposData);
    }
  }, [fetchedUserData, fetchedReposData, setUserData, setReposData]);

  const debouncedRefetch = debounce(() => {
    userRefetch();
    reposRefetch();
  }, 500);

  useEffect(() => {
    if (isValid && username) {
      debouncedRefetch();
    }
    return () => debouncedRefetch.cancel();
  }, [username, isValid, debouncedRefetch]);

  if (!username) {
    return {
      userData,
      reposData,
      isLoadingBoth: false,
      hasUser: !!userData,
      isUserError: false,
    };
  }

  return {
    userData,
    reposData,
    isLoadingBoth,
    hasUser,
    isUserError,
  };
};
