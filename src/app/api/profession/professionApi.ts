import apiService from "@/app/services/apiService";
import type { Profession } from "./type";
import type { ResponseApi } from "@/shared/types/api";

export const professionApi = {
  get: () => apiService.get<ResponseApi<Profession[]>>('/api/v1/professions', {}),
};