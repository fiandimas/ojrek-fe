import type { ResponseApi } from '@/shared/types/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { MeResponse, MyJobsResponse, } from './type';
import { profileApi } from './authProfile';

export const useGetMyJobs = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<MyJobsResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>
) => {
  return useQuery({
    queryKey: ['my-jobs'],
    queryFn: () => profileApi.myJobs(params),
    ...options,
  })
};

export const useGetMe = (
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<MeResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>
) => {
  return useQuery({
    queryKey: ['me'],
    retry: false,
    queryFn: () => profileApi.me(),
    ...options,
  })
};
