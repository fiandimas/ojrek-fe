import { Box, Card, CardContent, Container, IconButton, Snackbar, Typography } from "@mui/material";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/router";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState<boolean>(false);

  const onSuccess = () => {
    setSnackbar(true);
    setTimeout(() => {
      navigate(ROUTES.AUTH.LOGIN);
    }, 1500);
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
        <Typography variant="h6" align="center">Let's create your OJREK profile</Typography>

        <Card sx={{ width: 400, marginTop: 2, p: 4 }}>
          <CardContent>
            <RegisterForm onSuccess={onSuccess} />
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        message="Success register. you can login"
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setSnackbar(false)}
          >
            <Close fontSize="small"/>
          </IconButton>
        }
      />
    </Container>
  );
}

export default RegisterPage;