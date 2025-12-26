import { Box, Button, Card, CardContent, Container, Stack, TextField, Typography } from "@mui/material";

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
            <form>
              <Stack gap={2}>
                <TextField placeholder="Email" size="small" fullWidth/>
                <TextField placeholder="Password" size="small" fullWidth/>
                <Button variant="contained">Login</Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LoginPage;