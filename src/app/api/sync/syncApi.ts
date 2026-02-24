import apiService from "@/app/services/apiService";
import type { GetLastSyncResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const syncApi = {
  get: () => apiService.get<ResponseApi<GetLastSyncResponse>>('/api/v1/last-sync'),
  post: () => apiService.post<ResponseApi<GetLastSyncResponse>>('/api/v1/sync'),
};