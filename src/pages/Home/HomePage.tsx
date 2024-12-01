import { InputAdornment, TextField } from '@mui/material';
import { Search } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl w-full">
      <div className="flex flex-col self-start gap-10">
        <h1 className="text-2xl font-light text-silver-400">
          Vamos procurar um Usuário no Github?
        </h1>
        <TextField
          variant="outlined"
          className="md:w-96 w-72"
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
      </div>
    </div>
  );
};
