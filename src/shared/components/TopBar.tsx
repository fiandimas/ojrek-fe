import { useAuth } from "@/app/contexts/AuthContext";
import { ROUTES } from "@/constants/router";
import { AppBar, Avatar, Box, Button, Container, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        color: 'text.primary'
      }}
    >
      <Container sx={{ maxWidth: 'xl' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 'w-full', minWidth: '100%' }}>
            <Box>
              <Button onClick={() => navigate(ROUTES.JOBS)} color="inherit">Jobs</Button>
              {auth.isAuthenticated && (
                <Button onClick={() => navigate(ROUTES.RECOMMENDED)} color="inherit">Recommended Jobs</Button>
              )}
              <Button  color="inherit">Companies</Button>
            </Box>
            <Box>
              {auth.isAuthenticated ? <Avatar> {auth.user?.name.charAt(0)} </Avatar> : (
                <>
                  <Button onClick={() => navigate(ROUTES.AUTH.LOGIN)} color="inherit">Login</Button>
                  <Button onClick={() => navigate(ROUTES.AUTH.REGISTER)} color="inherit">Register</Button>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;