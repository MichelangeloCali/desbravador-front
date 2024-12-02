import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useInfoRepos } from '@/hooks/useInfoRepos';

import { useUserStore } from '@/stores/infoAndRepos';

import { ReposTable, ReposTableSkeleton } from './components/ReposTable';
import { SearchForm } from './components/SearchForm';
import { UserInfo, UserInfoSkeleton } from './components/UserInfo';
import { SearchFormData, searchSchema } from './utils/schema';

export const HomePage = () => {
  const storedUsername = useUserStore((state) => state.userData?.login || '');

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    mode: 'onChange',
    defaultValues: {
      username: storedUsername,
    },
  });

  const username = watch('username');

  const { userData, reposData, isLoadingBoth, hasUser, isUserError } = useInfoRepos(
    username,
    isValid,
  );

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
