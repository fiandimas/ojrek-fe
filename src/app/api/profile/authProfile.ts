import apiService from "@/app/services/apiService";
import type { MyJobsResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const profileApi = {
  myJobs: (params: Record<string, any>) => apiService.get<ResponseApi<MyJobsResponse>>('/api/v1/jobs/@me', params),
};