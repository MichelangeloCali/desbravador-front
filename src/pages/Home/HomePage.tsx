import { useUser } from '@/api/useUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { debounce } from 'lodash';

import { useRepos } from '@/api/useRepos';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ReposTable, ReposTableSkeleton } from './components/ReposTable';
import { SearchForm } from './components/SearchForm';
import { UserInfo, UserInfoSkeleton } from './components/UserInfo';
import { SearchFormData, searchSchema } from './utils/schema';

export const HomePage = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    mode: 'onChange',
  });

  const username = watch('username');

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
    refetch: userRefetch,
  } = useUser(username);

  const {
    data: reposData,
    isLoading: isReposLoading,
    isSuccess: isSuccessRepos,
    isError: isReposError,
    refetch: reposRefetch,
  } = useRepos(username);

  const isLoadingBoth = isUserLoading || isReposLoading;

  const hasUserValues = !!userData && Object.values(userData).length > 0;
  const hasUser = isUserSuccess && hasUserValues && !!userData.id;

  const hasReposValues = !!reposData && reposData.length > 0;
  const hasRepos = isSuccessRepos && hasReposValues;

  const debouncedRefetch = useCallback(
    debounce(() => {
      userRefetch();
      reposRefetch();
    }, 500),
    [userRefetch, reposRefetch],
  );

  useEffect(() => {
    if (isValid && username) {
      debouncedRefetch();
    }
  }, [username, isValid, debouncedRefetch]);

  return (
    <div className="flex flex-col xl:flex-row items-center max-w-7xl w-full gap-10">
      <div className="flex flex-col items-center xl:self-start gap-10">
        <SearchForm register={register} errors={errors} />

        {isLoadingBoth ? (
          <UserInfoSkeleton />
        ) : (
          <UserInfo data={userData} hasUser={hasUser} isError={isUserError} />
        )}
      </div>

      <div className="mt-4 h-[600px]">
        {isLoadingBoth ? <ReposTableSkeleton /> : <ReposTable repos={reposData} />}
      </div>
    </div>
  );
};
