import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/store';

function ProtectedRouter() {
  const { pathname } = useLocation();
  const { userInfo } = useAuthStore((state) => state);
  if (!userInfo.token) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
