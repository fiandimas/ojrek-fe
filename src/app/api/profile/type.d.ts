export interface LoginData {
  email: string;
  password: string;
}

export interface MyJobsResponse {
  id: string;
  location: string;
  name: string;
  detail_url: string;
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