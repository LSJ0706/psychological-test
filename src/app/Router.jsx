import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import ProtectedRouter from '@/app/ProtectedRouter';
import HomePage from '@pages/HomePage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';
import MyPage from '@pages/MyPage';
import TestPage from '@pages/TestPage';
import ResultPage from '@pages/ResultPage';

function App() {
  const AuthenticatedOnlyRoutes = [
    {
      // Header 적용 route
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: '/result', element: <ResultPage /> },
        // ProtectedRouter 적용
        {
          path: '',
          element: <ProtectedRouter />,
          children: [
            { path: '/my-page', element: <MyPage /> },
            { path: '/test', element: <TestPage /> }
          ]
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
