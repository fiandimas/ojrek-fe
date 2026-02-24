export interface JobData {
  name: string;
  location: string;
  platform: string;
}

export interface Job {
  id: string;
  location: string;
  name: string;
  platform: string;
  detail_url: string;
  updated_at: string;
}

export interface GetJobResponse {
  jobs: Job[];
  count: number;
}