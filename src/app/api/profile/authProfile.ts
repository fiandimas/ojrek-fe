import apiService from "@/app/services/apiService";
import type { LoginData, MyJobsResponse, RegisterData, RegisterResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const profileApi = {
  myJobs: () => apiService.get<ResponseApi<MyJobsResponse[]>>('/api/v1/jobs/@me', {}),
  register: (data: RegisterData) => apiService.post<ResponseApi<RegisterResponse>>('/api/v1/auth/register', data),
};