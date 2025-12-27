import type { ResponseApi } from '@/shared/types/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { LoginData, LoginResponse, RegisterData, RegisterResponse } from './type';
import { authApi } from './authApi';

export const usePostLogin = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi<LoginResponse>>, AxiosError<ResponseApi>, LoginData>
) => {
  return useMutation({
    ...options,
    mutationFn: (data: LoginData) => authApi.login(data),
  });
};

export const usePostRegister = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi<RegisterResponse>>, AxiosError<ResponseApi>, RegisterData>
) => {
  return useMutation({
    ...options,
    mutationFn: (data: RegisterData) => authApi.register(data),
  });
};
