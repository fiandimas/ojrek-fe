import { Button, Stack, TextField, Typography, Autocomplete } from "@mui/material";
import useRegisterForm from "../hooks/useRegisterForm";
import { Controller } from "react-hook-form";
import type { AxiosError } from "axios";
import type { ResponseApi } from "@/shared/types/api";
import { useState } from "react";

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [error, setError] = useState<string>();

  const onError = (error: AxiosError<ResponseApi>) => {
    setError(error.response?.data.error.message)
  }

  const { form, onSubmit, isLoading, professions } = useRegisterForm({ onSuccess, onError });
  const { register, handleSubmit, formState: { errors }, control } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <Typography>{error}</Typography>
        <TextField
          placeholder="Fullname"
          size="small"
          fullWidth
          {...register('name', { required: 'Nama lengkap wajib diisi' })}
          helperText={errors.name?.message}
          slotProps={{
            formHelperText: {
              sx: {
                marginLeft: 0,
              }
            }
          }}
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

        <Controller
          name="profession"
          control={control}
          rules={{ required: 'Profesi wajib diisi' }}
          render={({ field}) => (
            <Autocomplete
              {...field}
              disablePortal
              options={professions}
              getOptionKey={(option) => option.id}
              getOptionLabel={(option) => option.label}
              onChange={(_, value) => field.onChange(value)}
              value={field.value}
              fullWidth
              renderInput={
                (params) =>
                  <TextField
                    {...params}
                    placeholder="Profession"
                    helperText={errors.profession?.message}
                    slotProps={{
                      formHelperText: {
                        sx: {
                          marginLeft: 0,
                        }
                      }
                    }}
                  />
              }
              size="small"
            />
          )}
        />

        <Button type="submit" variant="contained" disabled={isLoading}>Register</Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;