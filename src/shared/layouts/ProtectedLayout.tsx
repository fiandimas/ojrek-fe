import AuthGuard from "@/app/guards/AuthGuard";
import { Outlet } from "react-router";

const ProtectedLayout: React.FC = () => {
  return (
    <AuthGuard protected>
      <Outlet/>
    </AuthGuard>
  );
};

export default ProtectedLayout;