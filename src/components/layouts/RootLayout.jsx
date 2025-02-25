import Header from '@layouts/Header';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <div className="mx-auto">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
