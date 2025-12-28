import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext"
import { ROUTES } from "@/constants/router";
import { Backdrop, CircularProgress } from "@mui/material";

const AuthGuard = ({ children, protected: isProtected, guestOnly }: { children: React.ReactNode, protected?: boolean, guestOnly?: boolean }) => {
  const { isAuthenticated, loading } = useAuth();

if (loading)
  return (
    <Backdrop
      open
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 999,
        color: "#fff",
      }}
    >
      <CircularProgress size={96} thickness={2} />
    </Backdrop>
  );

  if (isProtected && !isAuthenticated) return <Navigate to={ROUTES.AUTH.LOGIN} replace  />

  if (guestOnly && isAuthenticated) return <Navigate to={ROUTES.JOBS} replace  />

  return <>{children}</>;
}

export default AuthGuard;