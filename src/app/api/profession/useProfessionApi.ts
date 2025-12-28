import type { ResponseApi } from '@/shared/types/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, type AxiosResponse } from 'axios';
import type { Profession, } from './type';
import { professionApi } from './professionApi';

export const useGetProfessions = (
  options?: Omit<UseQueryOptions<AxiosResponse<ResponseApi<Profession[]>>, AxiosError<ResponseApi>>, 'queryFn' | 'queryKey'>
) => {
  return useQuery({
    queryKey: ['professions'],
    queryFn: () => professionApi.get(),
    ...options,
  })
};
