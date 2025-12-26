import { createBrowserRouter } from "react-router";

import HomePage from '@/features/home/HomePage';
import JobPage from '@/features/job/JobPage';
import RegisterPage from '@/features/auth/register/RegisterPage';
import LoginPage from '@/features/auth/login/LoginPage';
import AppLayout from "@/shared/layouts/AppLayout";
import { ROUTES } from "@/constants/router";

const Router = [
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <HomePage/>
      },
      {
        path: ROUTES.JOBS,
        element: <JobPage/>
      },
      // Guest routes - authentication pages
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginPage />,
      },
      { path: ROUTES.AUTH.REGISTER, element: <RegisterPage /> },
    ],
  },
  
];

const router = createBrowserRouter(Router)

export default router;
