import { Button, Stack, TextField, Autocomplete } from "@mui/material";
import useRegisterForm from "../hooks/useRegisterForm";
import { Controller } from "react-hook-form";

interface RegisterFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onError, onSuccess }) => {
  const { form, onSubmit, professions, isLoading, loadingProfession } = useRegisterForm({ onSuccess, onError });
  const { register, handleSubmit, formState: { errors }, control } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <TextField
          placeholder="Fullname"
          size="small"
          fullWidth
          {...register('name', { required: 'Nama lengkap wajib diisi' })}
          helperText={errors.name?.message}
        />

        <TextField
          placeholder="Email"
          size="small"
          fullWidth
          {...register('email', {
              required: 'Email wajib diisi',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email harus valid',
              }
          })}
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

        <Controller
          name="profession"
          control={control}
          rules={{ required: 'Profesi wajib diisi' }}
          render={({ field}) => (
            <Autocomplete
              {...field}
              disablePortal
              options={professions}
              getOptionKey={(option) => option.ID}
              getOptionLabel={(option) => option.Name}
              onChange={(_, value) => field.onChange(value)}
              value={field.value}
              fullWidth
              renderInput={
                (params) =>
                  <TextField
                    {...params}
                    placeholder="Profession"
                    helperText={errors.profession?.message}
                  />
              }
              size="small"
            />
          )}
        />

        <Button type="submit" variant="contained" disabled={isLoading || loadingProfession}>Register</Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;