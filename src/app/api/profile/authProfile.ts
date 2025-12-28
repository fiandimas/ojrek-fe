import apiService from "@/app/services/apiService";
import type { MeResponse, MyJobsResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const profileApi = {
  me: () => apiService.get<ResponseApi<MeResponse>>('/api/v1/@me', {}),
  myJobs: (params: Record<string, any>) => apiService.get<ResponseApi<MyJobsResponse>>('/api/v1/jobs/@me', params),
};