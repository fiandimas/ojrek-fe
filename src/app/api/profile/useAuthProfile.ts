import type { ResponseApi } from '@/shared/types/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { MyJobsResponse, } from './type';
import { profileApi } from './authProfile';

export const useGetMyJobs = (
  params: Record<string, any>,
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<MyJobsResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>
) => {
  return useQuery({
    ...options,
    queryKey: ['my-jobs'],
    queryFn: () => profileApi.myJobs(params),
  })
};
