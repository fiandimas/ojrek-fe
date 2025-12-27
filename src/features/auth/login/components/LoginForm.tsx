import { Button, Stack, TextField, Typography } from "@mui/material";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm: React.FC = () => {
  const { form, onSubmit, isLoading, error } = useLoginForm();
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        {error ? <Typography>{error}</Typography> : ''}

        <TextField
          placeholder="Email"
          size="small"
          fullWidth
          {...register('email', { required: 'Email wajib diisi' })}
          helperText={errors.email?.message}
          slotProps={{
            formHelperText: {
              sx: {
                marginLeft: 0,
              }
            }
          }}
        />

        <TextField
          type="password"
          placeholder="Password"
          size="small"
          fullWidth
          {...register('password', { required: 'Password wajib diisi' })}
          helperText={errors.password?.message}
          slotProps={{
            formHelperText: {
              sx: {
                marginLeft: 0,
              }
            }
          }}
        />
        <Button type="submit" variant="contained" disabled={isLoading}>Login</Button>
      </Stack>
    </form>
  );
}

export default LoginForm;