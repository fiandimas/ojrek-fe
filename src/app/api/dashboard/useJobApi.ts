import type { ResponseApi } from '@/shared/types/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { PieChartResponse, ColumnChartResponse } from './type';
import { jobApi } from './jobApi';

export const chartKeys = {
  pie: (params: Record<string, any>) => ['pie', params] as const,
  column: (params: Record<string, any>) => ['column', params] as const,
};

export const useGetPie = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<PieChartResponse[]>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>,
) => {
  return useQuery({
    ...options,
    queryKey: chartKeys.pie(params),
    queryFn: () => jobApi.pie(params),
  })
};


export const useGetColumn = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<ColumnChartResponse[]>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>,
) => {
  return useQuery({
    ...options,
    queryKey: chartKeys.column(params),
    queryFn: () => jobApi.column(params),
  })
};