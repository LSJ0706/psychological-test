import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRouter() {
  const { pathname } = useLocation();
  const a = true;
  if (a) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
