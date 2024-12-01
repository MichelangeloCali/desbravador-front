import { InputAdornment, TextField } from '@mui/material';
import { Search } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';
import { SearchFormData } from '../../utils/schema';

type SearchFormProps = {
  register: UseFormRegister<SearchFormData>;
  errors: Partial<Record<keyof SearchFormData, { message?: string }>>;
};

export const SearchForm = ({ register, errors }: SearchFormProps) => (
  <div className="flex flex-col gap-10 items-center">
    <h1 className="text-2xl font-light text-silver-400">
      Vamos procurar um Usuário no Github?
    </h1>

    <form>
      <TextField
        {...register('username')}
        error={!!errors.username}
        helperText={errors.username?.message}
        variant="outlined"
        className="w-96"
        label="Pesquise um Usuário"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} className="text-silver-400" />
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  </div>
);
