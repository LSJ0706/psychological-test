import Header from '@layouts/Header';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
