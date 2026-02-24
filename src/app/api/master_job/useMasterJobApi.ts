import type { ResponseApi } from '@/shared/types/api';
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { GetJobResponse, JobData } from './type';
import { jobApi } from './masterJobApi';

export const jobKeys = {
  all: ['master_jobs'] as const,
  lists: () => [...jobKeys.all, 'list'] as const,
  list: (params: Record<string, any>) => [...jobKeys.lists(), params] as const,
};

export const useGetMasterJobs = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<GetJobResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>,
) => {
  return useQuery({
    ...options,
    queryKey: jobKeys.list(params),
    queryFn: () => jobApi.get(params),
  })
};

export const usePostMasterJob = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi>, AxiosError<ResponseApi>, JobData>
) => {
  return useMutation({
    ...options,
    mutationFn: (data: JobData) => jobApi.post(data),
  });
};

export const usePutMasterJob = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi>, AxiosError<ResponseApi>, { id: string; data: JobData }>
) => {
  return useMutation({
    ...options,
    mutationFn: ({ id, data }) => jobApi.put(id, data),
  });
};

export const useDeleteMasterJob = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi>, AxiosError<ResponseApi>, string>
) => {
  return useMutation({
    ...options,
    mutationFn: (id: string) => jobApi.delete(id),
  });
};