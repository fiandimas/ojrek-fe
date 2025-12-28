import { Button, Stack, TextField } from "@mui/material";
import useLoginForm from "../hooks/useLoginForm";
import type { AxiosResponse } from "axios";
import type { ResponseApi } from "@/shared/types/api";
import type { LoginResponse } from "@/app/api/auth/type";

interface LoginFormProps {
  onError: (error: string) => void;
  onSuccess: (response: AxiosResponse<ResponseApi<LoginResponse>>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onError, onSuccess }) => {
  const { form, onSubmit, isLoading } = useLoginForm({ onError, onSuccess });
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <TextField
          placeholder="Email"
          size="small"
          fullWidth
          {...register('email', { required: 'Email wajib diisi' })}
          helperText={errors.email?.message}
        />

        <TextField
          type="password"
          placeholder="Password"
          size="small"
          fullWidth
          {...register('password', { required: 'Password wajib diisi' })}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" disabled={isLoading}>Login</Button>
      </Stack>
    </form>
  );
}

export default LoginForm;