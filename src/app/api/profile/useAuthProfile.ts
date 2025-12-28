import type { ResponseApi } from '@/shared/types/api';
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { LoginData, MyJobsResponse, RegisterData, RegisterResponse } from './type';
import { profileApi } from './authProfile';

export const useGetMyJobs = (
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<MyJobsResponse[]>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>
) => {
  return useQuery({
    ...options,
    queryKey: ['my-jobs'],
    queryFn: () => profileApi.myJobs(),
  })
};
