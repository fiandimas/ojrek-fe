import { AppBar, Box, Button, Container, Menu, Toolbar, Typography } from "@mui/material";

const TopBar: React.FC = () => {
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
              <Button>Jobs</Button>
              <Button>Companies</Button>
            </Box>
            <Box>
              <Button>SIGN UP</Button>
              <Button>LOGIN</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;