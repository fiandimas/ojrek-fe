import { createBrowserRouter } from "react-router";

import HomePage from '@/features/home/HomePage';
import JobPage from '@/features/job/JobPage';
import RegisterPage from '@/features/auth/register/RegisterPage';


const Router = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/job',
    element: <JobPage/>
  },
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
