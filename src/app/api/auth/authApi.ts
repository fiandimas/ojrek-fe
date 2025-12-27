import apiService from "@/app/services/apiService";
import type { LoginData, LoginResponse, RegisterData, RegisterResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const authApi = {
  login: (data: LoginData) => apiService.post<ResponseApi<LoginResponse>>('/api/v1/auth/login', data),
  register: (data: RegisterData) => apiService.post<ResponseApi<RegisterResponse>>('/api/v1/auth/register', data),
};