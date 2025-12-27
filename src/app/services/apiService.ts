import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import type { QueryClient } from '@tanstack/react-query';

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status?: number;
}

class ApiService {
  private api: AxiosInstance;
  private apiUrl: string;
  private queryClient: QueryClient | null = null;

  constructor() {
    this.apiUrl = 'http://localhost:8080';
    this.api = axios.create({
      baseURL: this.apiUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // this.setupInterceptors();
  }

  setQueryClient(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  private buildUrl(url: string): string {
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `${this.apiUrl}${url}`;
    const [path, query] = fullUrl.split('?');
    const cleanPath = path.replace(/\/$/, '');
    return query ? `${cleanPath}?${query}` : cleanPath;
  }

  async get<T = any>(url: string, params: Record<string, any> = {}): Promise<AxiosResponse<T>> {
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(
        ([_, value]) => value !== undefined && value !== null && value !== '',
      ),
    );

    return this.api.get<T>(this.buildUrl(url), { params: queryParams });
  }

  async getBlob(url: string, params: Record<string, any> = {}): Promise<AxiosResponse<Blob>> {
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(
        ([_, value]) => value !== undefined && value !== null && value !== '',
      ),
    );

    return this.api.get<Blob>(this.buildUrl(url), { 
      params: queryParams,
      responseType: 'blob'
    });
  }

  async post<T = any>(url: string, payloads: any = {}): Promise<AxiosResponse<T>> {
    return this.api.post<T>(this.buildUrl(url), payloads);
  }

  async postForm<T = any>(
    url: string,
    payloads: Record<string, any> = {},
  ): Promise<AxiosResponse<T>> {
    const formData = new URLSearchParams();

    Object.entries(payloads).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    return this.api.post<T>(this.buildUrl(url), formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  async put<T = any>(url: string, payloads: any = {}): Promise<AxiosResponse<T>> {
    return this.api.put<T>(this.buildUrl(url), payloads);
  }

  async patch<T = any>(url: string, payloads: any = {}): Promise<AxiosResponse<T>> {
    return this.api.patch<T>(this.buildUrl(url), payloads);
  }

  async delete<T = any>(url: string): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(this.buildUrl(url));
  }
}

export const apiService = new ApiService();
export default apiService;
