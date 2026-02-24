import { useAuth } from "@/app/contexts/AuthContext";
import { ROUTES } from "@/constants/router";
import { AppBar, Avatar, Box, Button, Container, Menu, MenuItem, Toolbar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    logout();
    setAnchorEl(null);
  };

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

              {(isAuthenticated && user?.type === 'external') && (
                <Button onClick={() => navigate(ROUTES.RECOMMENDED)} color="inherit">Recommended Jobs</Button>
              )}
              {user?.type === 'internal' && (
                <>
                    <Button onClick={() => navigate(ROUTES.INTERNAL.DASHBOARD)} color="inherit">Dashboard</Button>
                    <Button onClick={() => navigate(ROUTES.INTERNAL.JOB)} color="inherit">Master Job</Button>
                    <Button onClick={() => navigate(ROUTES.INTERNAL.SYNC)} color="inherit">Sync Job</Button>
                </>
              )}
            </Box>
            <Box>
              {isAuthenticated ?
              (
                <>
                  <Button
                    variant="contained"
                    startIcon={<Avatar src="/user.jpg" sx={{ width: 24, height: 24 }} />}
                    onClick={handleClick}
                  >
                    {user?.name}
                  </Button>
                  <Menu
                    id="menu"
                    open={open}
                    anchorEl={anchorEl}
                  >
                    <MenuItem onClick={handleClose} sx={{ fontSize: 14 }}>Logout</MenuItem>
                  </Menu>
                </>
              )
                :
              (
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