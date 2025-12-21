import { createBrowserRouter } from "react-router";

import RegisterPage from '@/features/auth/register/RegisterPage';


const Router = [
  // Guest routes - authentication pages
  {
    path: '/auth',
    children: [
      { path: 'login', element: <RegisterPage /> },
    ],
  },
];

const router = createBrowserRouter(Router)

export default router;
