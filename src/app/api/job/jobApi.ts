import apiService from "@/app/services/apiService";
import type { GetJobResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const jobApi = {
  get: (params: Record<string, any>) => apiService.get<ResponseApi<GetJobResponse>>('/api/v1/jobs', params),
};