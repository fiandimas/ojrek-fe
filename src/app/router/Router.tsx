import { createBrowserRouter } from "react-router";

import HomePage from '@/features/home/HomePage';
import JobPage from '@/features/job/JobPage';
import RegisterPage from '@/features/auth/register/RegisterPage';
import LoginPage from '@/features/auth/login/LoginPage';
import RecommendedPage from '@/features/recommended/RecommendedPage';
import SyncPage from '@/features/sync/SyncPage';
import DashboardPage from '@/features/dashboard/DashboardPage';
import MasterJobPage from '@/features/master_job/MasterJobPage';
import AppLayout from "@/shared/layouts/AppLayout";
import { ROUTES } from "@/constants/router";
import GuestLayout from "@/shared/layouts/GuestLayout";
import ProtectedLayout from "@/shared/layouts/ProtectedLayout";

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
      // GUEST ROUTE
      {
        element: <GuestLayout />,
        children: [
          {
            path: ROUTES.AUTH.LOGIN,
            element: <LoginPage />,
          },
          { path: ROUTES.AUTH.REGISTER,
            element: <RegisterPage /> 
          },
        ],
      },
      // PROTECTED ROUTE
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ROUTES.RECOMMENDED,
            element: <RecommendedPage/>
          },
        ],
      },

      // PROTECTED INTERNAL ROUTE
      {
        path: ROUTES.INTERNAL.SYNC,
        element: <SyncPage />
      },
      {
        path: ROUTES.INTERNAL.DASHBOARD,
        element: <DashboardPage />
      },
      {
        path: ROUTES.INTERNAL.JOB,
        element: <MasterJobPage />
      }
    ],
  },
];

const router = createBrowserRouter(Router)

export default router;
