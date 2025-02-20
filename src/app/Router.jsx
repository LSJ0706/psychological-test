import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import ProtectedRouter from '@/app/ProtectedRouter';
import HomePage from '@pages/HomePage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';

function App() {
  const AuthenticatedOnlyRoutes = [
    {
      // Header 적용 route
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <HomePage /> },
        // ProtectedRouter 적용
        {
          path: '',
          element: <ProtectedRouter />,
          children: []
        }
      ]
    },
    // Header 미적용 route
    { path: '/sign-in', element: <SignInPage /> },
    { path: '/sign-up', element: <SignUpPage /> }
  ];
  const router = createBrowserRouter([...AuthenticatedOnlyRoutes]);
  return <RouterProvider router={router} />;
}

export default App;
