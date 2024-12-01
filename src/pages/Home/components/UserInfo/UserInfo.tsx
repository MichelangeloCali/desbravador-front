import { User } from '@/types/models/User';
import { Typography } from '@mui/material';
import { UserIcon } from 'lucide-react';

type UserInfoProps = {
  isError: boolean;
  hasUser: boolean;
  data?: User;
};

export const UserInfo = ({ isError, hasUser, data }: UserInfoProps) => {
  const bio = !!data?.bio;
  const followers = !!data?.followers;
  const following = !!data?.following;

  if (isError || !hasUser) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-4 md:w-96 w-72">
        <UserIcon
          size={40}
          className="text-silver-600 md:h-40 md:w-40 h-20 w-20 rounded-full border-2 border-silver-600"
        />
        <Typography variant="body1" color="primary">
          Utilize o input para procurar por um Usuário válido.
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4 md:w-96 w-72">
      <div className="flex flex-col items-center gap-4">
        <img
          src={data?.avatar_url}
          alt="Avatar"
          className="md:h-40 md:w-40 h-20 w-20 rounded-full"
        />

        <Typography variant="h6">{data?.name || 'Nome não disponível'}</Typography>

        <Typography variant="h6" color="secondary">
          {data?.email || 'Email não disponível'}
        </Typography>

        {bio && (
          <Typography variant="body1" color="secondary">
            {data?.bio || 'Bio não disponível'}
          </Typography>
        )}

        {followers && (
          <Typography variant="body1" color="secondary">
            Seguidores: {data?.followers || 'Não possui seguidores'}
          </Typography>
        )}

        {following && (
          <Typography variant="body1" color="secondary">
            Seguindo: {data?.following || 'Não está seguindo ninguém'}
          </Typography>
        )}
      </div>
    </div>
  );
};
