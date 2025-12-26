import { ROUTES } from "@/constants/router";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

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
              <Button onClick={() => navigate(ROUTES.JOBS)}>Jobs</Button>
              <Button>Companies</Button>
            </Box>
            <Box>
              <Button onClick={() => navigate(ROUTES.AUTH.LOGIN)}>SIGN UP</Button>
              <Button onClick={() => navigate(ROUTES.AUTH.REGISTER)}>LOGIN</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;