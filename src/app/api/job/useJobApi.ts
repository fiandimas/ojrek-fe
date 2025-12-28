import type { ResponseApi } from '@/shared/types/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { GetJobResponse } from './type';
import { jobApi } from './jobApi';

export const jobKeys = {
  all: ['employees'] as const,
  lists: () => [...jobKeys.all, 'list'] as const,
  list: (params: Record<string, any>) => [...jobKeys.lists(), params] as const,
};

export const useGetJobs = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<GetJobResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>,
) => {
  return useQuery({
    ...options,
    queryKey: jobKeys.list(params),
    queryFn: () => jobApi.get(params),
  })
};
