import { Alert, Box, Card, CardContent, Container, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/router";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>();

  const onSuccess = () => {
    navigate(ROUTES.RECOMMENDED);
  };
  
  const onError = (error: string) => {
    setError(error);
  };

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
            {error ? <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert> : ''}
            <LoginForm onError={onError} onSuccess={onSuccess}/>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LoginPage;