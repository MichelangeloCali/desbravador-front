import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@mui/material';
import { CircleUserRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { user } = useAuth0();

  return (
    <header className="py-2 px-4 md:h-20 h-40 w-full border-b border-silver-800 flex flex-col md:flex-row items-center justify-between md:px-10">
      <div className="flex items-center gap-2 md:flex-row w-full justify-between">
        <div className="flex items-center gap-2">
          <img src="/social.svg" alt="Logo" className="md:h-14 md:w-14 h-9 w-9" />
          Olá, {user?.given_name}
        </div>

        <div className="md:block hidden">
          <TextField variant="outlined" className="w-72" label="Pesquise um Usuário" />
        </div>

        <nav className="flex items-center gap-3 md:gap-10 md:flex-row">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-l flex gap-2 ${
                  isActive ? 'text-white underline' : 'text-silver-500 hover:underline'
                }`
              }
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-xl flex gap-2 ${isActive ? 'text-white' : 'text-silver-500'}`
              }
            >
              <CircleUserRound width={30} height={30} />
            </NavLink>
          </div>
        </nav>
      </div>

      <div className="md:hidden">
        <TextField variant="outlined" className="w-72" label="Pesquise um Usuário" />
      </div>
    </header>
  );
};
