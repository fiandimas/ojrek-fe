export interface Job {
  id: string;
  location: string;
  name: string;
  detail_url: string;
  updated_at: string;
}

export interface GetJobResponse {
  jobs: Job[];
  count: number;
}