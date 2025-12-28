export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  email: string;
  profession: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  profession: string;
}

export interface RegisterResponse {
  token: string;
}