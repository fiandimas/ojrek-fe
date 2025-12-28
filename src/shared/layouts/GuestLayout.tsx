import AuthGuard from "@/app/guards/AuthGuard";
import { Outlet } from "react-router";

const GuestLayout: React.FC = () => {
  return (
    <AuthGuard guestOnly>
      <Outlet/>
    </AuthGuard>
  );
};

export default GuestLayout;