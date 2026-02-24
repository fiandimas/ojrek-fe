import apiService from "@/app/services/apiService";
import type { ColumnChartResponse, PieChartResponse } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const jobApi = {
  pie: (params: Record<string, any>) => apiService.get<ResponseApi<PieChartResponse[]>>('/api/v1/internal/pie', params),
  column: (params: Record<string, any>) => apiService.get<ResponseApi<ColumnChartResponse[]>>('/api/v1/internal/column', params),
};