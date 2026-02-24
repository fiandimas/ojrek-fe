export interface MeResponse {
  id: string;
  name: string;
  email: string;
  profession: string;
  type: string;
}

export interface MyJobsResponse {
  jobs: Job[];
  count: number;
}

export interface Job {
  id: string;
  location: string;
  name: string;
  detail_url: string;
  updated_at: string;
}
