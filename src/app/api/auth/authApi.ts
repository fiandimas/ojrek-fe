import apiService from "@/app/services/apiService";
import type { LoginData, LoginResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const authApi = {
  login: (data: LoginData) => apiService.post<ResponseApi<LoginResponse>>('/api/v1/auth/login', data),
};