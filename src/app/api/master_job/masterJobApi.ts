import apiService from "@/app/services/apiService";
import type { GetJobResponse, JobData } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const jobApi = {
  get: (params: Record<string, any>) => apiService.get<ResponseApi<GetJobResponse>>('/api/v1/master/jobs', params),
  post: (data: JobData) => apiService.post<ResponseApi>(`/api/v1/master/jobs`, data),
  put: (id: string, data: JobData) => apiService.post<ResponseApi>(`/api/v1/master/jobs/${id}`, data),
  delete: (id: string) => apiService.delete<ResponseApi>(`/api/v1/master/jobs/${id}`),
};