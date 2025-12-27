export interface ResponseApi<T = undefined> {
  data?: T;
  error: {
    code: string;
    message: string;
  };
  message: string;
  success: boolean;
}