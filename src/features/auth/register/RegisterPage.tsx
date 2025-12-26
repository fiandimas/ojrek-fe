import { Autocomplete, Box, Button, Card, CardContent, Container, Stack, TextField, Typography } from "@mui/material";

const RegisterPage: React.FC = () => {
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
            <form>
              <Stack gap={2}>
                <TextField placeholder="Fullname" size="small" fullWidth/>
                <TextField placeholder="Email" size="small" fullWidth/>
                <TextField placeholder="Password" size="small" fullWidth/>
                <Autocomplete
                  disablePortal
                  options={[
                    {
                      label: 'AUUU',
                      value: 'AUUUU'
                    }
                  ]}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Profession" />}
                  size="small"
                />
                <Button variant="contained">Register</Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default RegisterPage;