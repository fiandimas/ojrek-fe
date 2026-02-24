import type { ResponseApi } from '@/shared/types/api';
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { GetLastSyncResponse } from './type';
import { syncApi } from './syncApi';

export const syncKeys = {
  all: ['employees'] as const,
  lists: () => [...syncKeys.all, 'list'] as const,
  list: () => [...syncKeys.lists(), 'params'] as const,
};

export const useGetLastSync = (
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<GetLastSyncResponse>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>,
) => {
  return useQuery({
    ...options,
    queryKey: syncKeys.list(),
    queryFn: () => syncApi.get(),
  })
};

export const usePostJobSync = (
  options?: UseMutationOptions<AxiosResponse<ResponseApi<GetLastSyncResponse>>, AxiosError<ResponseApi>>
) => {
  return useMutation({
    ...options,
    mutationFn: () => syncApi.post(),
  });
};
