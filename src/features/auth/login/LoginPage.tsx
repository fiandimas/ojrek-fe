import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Box>
        <Typography variant="h6" align="center">Login to your OJREK account to continue.</Typography>

        <Card sx={{ width: 400, marginTop: 2, p: 4 }}>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LoginPage;