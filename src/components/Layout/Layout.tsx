import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="w-screen">
      <Header />

      <main className="w-full flex justify-center p-6">
        <Outlet />
      </main>
    </div>
  );
};
