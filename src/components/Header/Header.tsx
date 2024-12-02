import { NavLink } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { RoutesEnum } from '@/types/enums/routes';

export const Header = () => {
  const { user } = useAuth0();

  return (
    <header className="py-2 h-20 w-full border-b border-silver-800 flex flex-row items-center justify-center px-10">
      <div className="flex items-center gap-2 flex-row w-full justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <img src="/social.svg" alt="Logo" className="md:h-14 md:w-14 h-9 w-9" />
          Olá, {user?.given_name}
        </div>

        <nav className="flex items-center gap-3 md:gap-10 md:flex-row">
          <div>
            <NavLink
              to={RoutesEnum.HOME}
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
              to={RoutesEnum.PROFILE}
              className={({ isActive }) =>
                `text-xl flex gap-2 ${isActive ? 'text-white' : 'text-silver-500'}`
              }
            >
              <img
                src={user?.picture || '/social.svg'}
                alt="user"
                className="h-8 w-8 rounded-full"
              />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};
